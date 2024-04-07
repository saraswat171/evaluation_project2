
import React, { useEffect, useState } from 'react'


import Input from '../../components/Inputs/Input'

import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Stack, Typography } from '@mui/material'
import Adornment from '../../components/Adornment/Adornment'
import bookimg from '../../assets/images/geometric-gradient-futuristic-background_23-2149116406.avif'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useDispatch, useSelector } from 'react-redux'
import {loginUser } from '../../redux/auth/authAction'


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const validateForm = () => {
    let isValid = true;

  

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

 

    return isValid;
  };


  function handlePassword(event) {
    let new_pass = event.target.value;
    setPassword(new_pass);

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('email, password,role: ', email, password);
    if (validateForm()) {
    try {
      dispatch(loginUser({ email, password }));

    }
    catch (err) {
      alert(err);
    }
  }
  };
  const logged = useSelector(state => state.auth.logged);
  const error = useSelector(state=>state.auth.error)
  useEffect(()=>{
    console.log("error:c ", error);
    console.log("logged: ", logged);
    if( logged){
      alert('logged in successfully')
      navigate('/Home')
    }
    else if (error!== null) {
      alert(error)
    }
    
  },[logged ,navigate,error])



  return (
    <Stack sx={{ backgroundColor: '#1B1B1B', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'  }} >
    <Box sx={{ width: '80%', maxWidth: '1200px' }}>
    <Stack direction="row" justifyContent="center" alignItems="stretch">
        <Box sx={{ width: '50%', display: 'flex', alignItems: 'stretch' }}>
        <img src={bookimg} alt='' style={{ width: '100%', height: '100%', objectFit: 'cover'  }} >
        </img>
      </Box>
      <Box sx={{ width: '50%', display: 'flex', alignItems: 'stretch', justifyContent: 'center' }}>
        
      <Stack
            component="form"
            onSubmit={handleSubmit}
            spacing={2}
            sx={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '20px',
              boxSizing:'border-box',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              width: '100%',
              maxWidth: '500px',
            }}>

      

       


            <Box className='hero-content' sx={{ display: 'flex', flexDirection: 'column',gap:'10px', width: '100%' }}>
              <Box className='text-field' sx={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
                  
               
<Box>
              <Input label='Email address' type='email' height='30px' name='email'
                    value={email}

                    onChange={(e) => setEmail(e.target.value)}
                  />

{emailError && <Typography color="error">{emailError}</Typography>}
                 </Box>
                 <Box>
                 <Adornment label='Password (6+ characters)' name='password'
                    value={password} onChange={handlePassword}


                  />
                 {passwordError && <Typography color="error">{passwordError}</Typography>}
                 </Box>
                
                </Box>

                <Box className='textbutton' sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>



                  <Button variant='outlined' type='submit'
                    sx={{
                      textTransform: 'none', fontWeight: '500', fontSize: '16px', width: '200px',
                      borderRadius: '80px', display: 'flex', p: '8px', color: 'white', backgroundColor: 'Black',
                      mr: '8px', ":hover": { backgroundColor: '#004182', color: 'white' }
                    }}>Log in  </Button>
                </Box>


                <Box className='lastdiv' sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>

                  <p className='lastpara'>New User? <Link className='loginto' to='/' >SignUp</Link> </p>

                </Box>
                <Box className='lastdiv' sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
                  <Typography>Welcome to Book Library</Typography>


                </Box>
                <Box className='lastdiv' sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
                  <MenuBookIcon sx={{ height: '60px', width: '60px' }} />


                  </Box>
              </Box>
        </Stack>
        </Box>
       
      </Stack>
      </Box>
    </Stack>
  )
}

export default Login







