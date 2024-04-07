const UsersModel = require('../models/user')
const CustomError = require('../libs/error')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.createUser=async(body)=>{
    try {
        
        const { name ,email, password, role } = body;
        if( !email || !password ){
            throw new CustomError('Fields are required' , 400)
        }
       
        const existingUser = await UsersModel.findOne({ email })

        console.log(existingUser)
        if (existingUser) {
           throw new CustomError('email already exist' ,409);
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newuser = await UsersModel.create({name,  email, password: hashedPassword , role });
     
        return newuser
    }


    catch (err) {
        console.log("dd" ,err)
     throw err;
    }
};

exports.loginUser=async(body)=>{
    try {
       
        const { email, password } = body;
        
        if(!email || !password ){
            throw new CustomError('Fields are required' , 400)
        }
        const user = await UsersModel.findOne({ email });
        
        if(!user){
            throw new CustomError('User Not Found', 404)
        }

        if (user && bcrypt.compareSync(password, user.password)) {

            const token = jwt.sign({ ID: user._id }, 'jwt-key');

            // res.cookie('token', token);
           // res.json({ success: true, user, token });
            return ({user , token});
        } else {
           throw new CustomError('Password is Incorrect', 400)
        }
    } catch (error) {
       
        throw error;
    }
};