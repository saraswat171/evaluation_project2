import React from 'react';

import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
const Input = ({label,type,padding, name, value, onChange }) => {
    return (
       
            
              <Box sx={{display:'flex' , flexDirection:'column' ,gap:'5px'}}>
                      {/* <input className='inputfield'
                        type={type} 
                        name={name} 
                        id={name} 
                        placeholder={placeholder} 
                        value={value} 
                        onChange={onChange} 
                        required 
                    ></input> */}
                    <label className='label'>{label}</label>
                      <TextField type={type} error={false}  sx={{ padding }}  value={value} 
                        onChange={onChange}    name={name}   size='small' />
              </Box>
            
              
    );
};

export default Input;