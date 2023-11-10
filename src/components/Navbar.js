import React from 'react'
import { Stack } from '@mui/material'
import {Link} from 'react-router-dom';
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
  <Stack direction="row" height="2rem" justifyContent="space-around" sx={{gap:{sm:'122px', xs: '40px'}, mt: {sm:'32px', xs:'20px'}, alignItems:"center",
   justifyContent:'none'}}>
      <Link to="/">
        <img src={Logo} alt='logo' style={{width:'43px', height:'40px', margin:'0 20px'}}></img>
      </Link>

      <Stack direction="row" gap="40px" fontSize="20px"  alignItems={{sm:'flex-start', xl:'flex-end'}}>
        <Link to="/" style={{textDecoration:'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Home</Link>
        <a href='#exercises' style={{textDecoration: 'none', color:'#3A1212'}}>Exercises</a>

      </Stack>
    </Stack>
  )
}

export default Navbar