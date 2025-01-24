import React,{useEffect, useRef} from 'react'
import {AppBar,Toolbar,Grid,Button,Divider} from '@mui/material'
import { useMediaQuery } from 'react-responsive';
import useStyles from './styles'
import { useNavigate } from 'react-router-dom' 
import { CircleUser, Menu, QuestIcon } from '../../Consts/Icons'; 
import '../../../fonts/fonts.css'
import Drawer from './Drawer/Drawer';
import { Search, ShopCart } from '../../Icons/Icons';
import DrawerContent from './Drawer/DrawerContent/DrawerContent';
import SecondDrawer from './Drawer/SecondDrawer/SecondDrawer';
export default function Navbar() {
  const isMobile=useMediaQuery({maxWidth:540})
  const menuRef = useRef(null)
  const searchBoxRef=useRef(null)
  const navigate=useNavigate();
  const openMenu=()=>{
    if(menuRef.current.style.display==="flex"){menuRef.current.style.display="none"} 
    else{menuRef.current.style.display="flex"}
  }

  const openSearchBox=()=>{
    searchBoxRef.current.style.width="100%"
    searchBoxRef.current.style.transition="1s"
  }
   const openDrawer=(c)=>{
    document.getElementsByClassName(c)[0].style.width="30%"
    document.getElementsByClassName(c)[0].parentNode.style.display="flex";
     
  
 
    document.body.style.overflow="hidden"
   }
  
  const classes=useStyles();
  return (
    <>
    <Drawer className='rightDrawer'   sib={'secondDrawer'}>

      <DrawerContent sib={'secondDrawer'}/>
      <SecondDrawer className={'secondDrawer'}/>
    </Drawer>
    <Drawer className='leftDrawer' side={'left'} />
    <AppBar position='static' className={classes.app_bar}>
        <Toolbar variant='dense' className={classes.tool_bar}>
          <span className={classes.left_tools}>
            <span className={classes.menu_btn} onClick={()=>{openDrawer('rightDrawer')}} ><Menu/> 
            
            
            
            
            </span>
            
          </span>
          <span className={classes.right_tools}>
          
          <span className={classes.history_tool_btn}  onClick={()=>{openDrawer('leftDrawer')}}>
             
            <span><CircleUser className={classes.icon_user}/></span>
            <div className={classes.info_box}> 
              <div>نام کاربر</div>
              <div>رده کاربر</div>
            </div>
            
            
            
            </span>


            </span>       </Toolbar>    </AppBar>

          </>
  )
}
