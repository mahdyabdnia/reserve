import React,{useRef} from 'react'
import useStyles from './styles'
import { Divider } from '@mui/material'
import { Down } from '../Icons/Icons'
import {muiDivider} from '@mui/material'
import QuickBox from './QuickBox/QuickBox'
import NewsBox from './NewsBox/NewsBox'
export default function Home() {
  const notifRef = useRef(null)
  const notifBoxRef=useRef(null)
  const drawerRef = useRef(null)
  const openDrawer = () => {
 
    const drawer = document.getElementsByClassName('drawer')[0];
 

    if (drawer) {
        console.log('Current height:', drawer.style.height);
        if (drawer.style.height === '0px' ) {
            const contentHeight = '300px';
            drawer.style.height = contentHeight; // باز کردن دراور
        } else {
            drawer.style.height = '0'; // بستن دراور
        }
    } 
};
    
  
  const classes=useStyles()
  const handleOpenClose=()=>{
   if(notifRef.current.style.maxHeight){
    notifRef.current.style.maxHeight=null 
    notifBoxRef.current.style.paddingBottom="0px"
   }
   else{
    notifRef.current.style.maxHeight=notifRef.current.scrollHeight + "px" ;
    notifBoxRef.current.style.paddingBottom="1vh"
   }
  }
  return (
    <div className={classes.root}> 
    <h2 className={classes.header} onClick={openDrawer}>دسترسی سریع</h2>
   
       <QuickBox className={'drawer'}/>
     

    </div>
  )
}
