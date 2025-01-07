import React from 'react'
import useStyles from './styles'
import { Outlet,useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

export default function Layout() {
    const classes=useStyles();
    const location=useLocation()
  return (
    <div className={classes.layout_root} style={{backgroundSize:'100vh',backgroundImage:`url(${"images/background.jpg"})`,}}>
    {location.pathname!=="/login" && <Navbar/>}   
      <Outlet />
     


    </div>
  )
}
