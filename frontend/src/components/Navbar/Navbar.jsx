
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
import React from 'react'

import booklogo from '../../assets/images/geometric-gradient-futuristic-background_23-2149116406.avif'
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import InfoIcon from '@mui/icons-material/Info';

import './Navbar.css'

import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/auth/authAction';
import { useDispatch } from 'react-redux';



function Navbar() {
    // logout ka kaam profile page pr

      const dispatch = useDispatch();
      const navigate = useNavigate();
      const handleLogout = async() => {
        const res = await dispatch(logoutUser());
      
        if(res){
        navigate('/Login');
       }
      };
    return (

        <Box sx={{ height: '52px', justifyContent: 'center', backgroundColor: '#1B1B1B' }} >
            <AppBar sx={{ backgroundColor: '#1B1B1B', height: '52px', justifyContent: 'center', boxShadow: 'none' }}>
                <Toolbar sx={{ display: 'flex', flexDirection: 'row',  alignItems: 'center', }}>

                    <Toolbar sx={{ alignItems: 'center', gap: '10px', mr: '85px' }}>
                        <img src={booklogo} alt='' className='iconsimage' ></img>
                    </Toolbar >

                    <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

                        <Toolbar>
                            <Link to="/profile" style={{ textDecoration: 'none' }} >
                                <Box sx={{
                                    display: 'flex', flexDirection: 'column',
                                    alignItems: 'center', textDecoration: 'none',

                                    color: (theme) => theme.palette.grey[700],
                                    "&:hover": { color: "#191919" },
                                    '&:active': { textDecoration: 'underline', textUnderlinePosition: '10px' }
                                }} >
                                    <AccountBoxIcon sx={{ height: '24px', width: '24px', alignItems: 'center', color: 'white' }} />
                                    <Typography fontSize={'12px'} align="center" sx={{ color: 'white' }}  >Profile</Typography>
                                </Box>

                            </Link>
                        </Toolbar>
                        <Toolbar>

                            <Link to="/dashboard" style={{ textDecoration: 'none' }}  >
                                <Box sx={{
                                    display: 'flex', flexDirection: 'column',
                                    alignItems: 'center', textDecoration: 'none',

                                    color: (theme) => theme.palette.grey[700],
                                    "&:hover": { color: "#191919" },
                                    '&:active': { textDecoration: 'underline', textUnderlinePosition: '10px' }
                                }} >
                                    < DashboardIcon sx={{ height: '24px', width: '24px', alignItems: 'center', color: 'white' }} />
                                    <Typography fontSize={'12px'} width={'65px'} display={'block'} align="center" sx={{ color: 'white' }} >
                                        Dashboard</Typography>
                                </Box>

                            </Link>
                        </Toolbar>


                        <Toolbar>
                            <Link to="/records" style={{ textDecoration: 'none' }} >
                                <Box sx={{
                                    display: 'flex', flexDirection: 'column',
                                    alignItems: 'center', textDecoration: 'none',

                                    color: (theme) => theme.palette.grey[700],
                                    "&:hover": { color: "#191919" },
                                    '&:active': { textDecoration: 'underline', textUnderlinePosition: '10px' }
                                }} >
                                    < ReceiptLongIcon sx={{ height: '24px', width: '24px', alignItems: 'center', color: 'white' }} />
                                    <Typography fontSize={'12px'} align="center" sx={{ color: 'white' }} >Records</Typography>
                                </Box>

                            </Link>

                        </Toolbar>
                        <Toolbar>
                            <Link to="/about" style={{ textDecoration: 'none' }} >
                                <Box sx={{
                                    display: 'flex', flexDirection: 'column',
                                    alignItems: 'center', textDecoration: 'none',

                                    color: (theme) => theme.palette.grey[700],
                                    "&:hover": { color: "#191919" },
                                    '&:active': { textDecoration: 'underline', textUnderlinePosition: '10px' }
                                }} >
                                    < InfoIcon sx={{ height: '24px', width: '24px', alignItems: 'center', color: 'white' }} />
                                    <Typography fontSize={'12px'} align="center" sx={{ color: 'white' }} >About</Typography>
                                </Box>

                            </Link>

                        </Toolbar>
                        <Toolbar>
                       
            <Button onClick={handleLogout} sx={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', textDecoration: 'none', textTransform: 'none',

              color: (theme) => theme.palette.grey[700],
              "&:hover": { color: "#191919" },
              '&:active': { textDecoration: 'underline', textUnderlinePosition: '10px' }
            }}>< LogoutIcon sx={{ height: '24px', width: '24px', alignItems: 'center', color:'white' }} />
              <Typography fontSize={'12px'} align="center" color={'white'}>Log Out</Typography></Button>
                        </Toolbar>




                    </Toolbar>







                </Toolbar>
            </AppBar>
        </Box>


    )
}

export default Navbar