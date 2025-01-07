import React,{useEffect, useRef} from 'react'
import {AppBar,Toolbar,Grid,Button,Divider} from '@mui/material'
import { useMediaQuery } from 'react-responsive';
import useStyles from './styles'

import { CircleUser, Menu, QuestIcon } from '../../Consts/Icons';
import Drawer from './Drawer/Drawer';
export default function Navbar() {
  const isMobile=useMediaQuery({maxWidth:540})
  const menuRef = useRef(null)
  const openMenu=()=>{
    if(menuRef.current.style.display==="flex"){menuRef.current.style.display="none"} 
    else{menuRef.current.style.display="flex"}
  }
  
  const clickMenu=(c)=>{
   if(isMobile) {document.getElementsByClassName(c)[0].style.width="90%"}
  else{document.getElementsByClassName(c)[0].style.width="25%"}
   

    document.body.style.backgroundColor="rgba(0,0,0,.6)"
    document.body.style.transition="1s"
    const elements = document.querySelectorAll('body *');
   for (let i = 0; i < elements.length; i++) {
        elements[i].style.pointerEvents="none"
    }

    const drawerElements = document.getElementsByClassName(c)[0].querySelectorAll('*');
    for (let i = 0; i < drawerElements.length; i++) {
        drawerElements[i].style.pointerEvents="auto"
        drawerElements[i].style.display="flex"
        drawerElements[i].style.transition='0.1s';
    }
  }
  const classes=useStyles();
  return (
    <>
    <Drawer className='drawer'  />
    <Drawer className='leftDrawer' side={'left'} />
    <AppBar position='static'>
        <Toolbar variant='dense' className={classes.tool_bar}>
          <span className={classes.left_tools}>
            <span className={classes.menu_btn} onClick={()=>{clickMenu('drawer')}} ><Menu/> 
            
            
            
            
            </span>
          </span>
          <span className={classes.right_tools}>
            <div className={classes.help_box}>
            <button className={classes.help_button} onClick={openMenu}><QuestIcon />   </button>
             <div className={classes.help_menu} ref={menuRef}>
              <ul className={classes.help_list}>
                <li className={classes.help_list_item}>آشنایی با سامانه </li>
                <li className={classes.help_list_item}> راهنمای کاربران</li>
              </ul>
             </div>
             
         
            </div>
            
            <Divider orientation='vertical'/>
            <button className={classes.info_button} onClick={()=>{clickMenu('leftDrawer')}}>
              <span className={classes.info_icon}>
                <CircleUser className={classes.icon}/>
              </span>
              <span className={classes.info_box}>
                <span>نام کاربری</span>
                <span>نام دانشکده</span>
              </span>
            </button>
            
            </span>       </Toolbar>    </AppBar>

          </>
  )
}
