import React,{useRef} from 'react'
import useStyles from './styles'
import { Divider } from '@mui/material'
import { Down } from '../Icons/Icons'
import {muiDivider} from '@mui/material'
import QuickBox from './QuickBox/QuickBox'
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
    <h2 className={classes.header}>دسترسی سریع</h2>
   
       <QuickBox/>
    </div>
  )
}
