
import {
    OutlinedInput ,InputAdornment, Box  } from '@mui/material'
  import React, { useState } from 'react'

  function Adornment({label,padding , onChange}) {
      const [showPassword, setShowPassword] = useState(false);
      const [show, setShow] = useState('Show');
  
      const handleClickShowPassword = () => {
          
          setShowPassword((show) => !show)
          showPassword ? setShow('Show') : setShow('Hide');
      };
    return (
  
        <Box sx={{display:'flex' , flexDirection:'column' ,gap:'5px'}}>
  <label className='label'>{label}</label>
      <OutlinedInput onChange={onChange} size='small'
    
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <button
             className='password-btn'
              onClick={handleClickShowPassword}
              type="button"
            
            >{show}
             
            </button>
          </InputAdornment>
        }
       
      /></Box>
    )
  }
  
  export default Adornment



