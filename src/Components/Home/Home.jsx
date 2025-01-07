import React,{useRef} from 'react'
import useStyles from './styles'
import { Divider } from '@mui/material'
import { Down } from '../Icons/Icons'
export default function Home() {
  const notifRef = useRef(null)
  const notifBoxRef=useRef(null)
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
      <div className={classes.notif_box} ref={notifBoxRef}>
        <h3 className={classes.h3} ><span>اطلاعیه‌ها</span> <span onClick={handleOpenClose}><Down/></span></h3>
      
       <ul className={classes.notif_list} ref={notifRef}>
        <li className={classes.notif_list_item}>اطلاعیه </li>
        <li className={classes.notif_list_item}>اطلاعیه </li>
        <li className={classes.notif_list_item}>اطلاعیه </li>
        <li className={classes.notif_list_item}>اطلاعیه </li>
       </ul>
      </div>
    </div>
  )
}
