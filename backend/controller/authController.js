const { authServices } = require("../service");



exports.SignUpUser = (async(req,res)=>{
    try{
        const response = await authServices.createUser(req.body);

        return res.status(201).json({message:"Success"}); 
    }
    catch(e){
        console.log("e: ", e?.message);
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
});
exports.SignInUser=(async(req,res)=>{
    try{
        const response = await authServices.loginUser(req.body);
       
       
        return res.status(200).json(response);
    }
    catch(e){
       

        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
});