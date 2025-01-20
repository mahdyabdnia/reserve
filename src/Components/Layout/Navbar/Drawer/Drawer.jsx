import React, { Children } from 'react'
import useStyles from './styles'
import classnames from 'classnames'
import { Close, Fork, PowerOff } from '../../../Consts/Icons';
import {Left, LeftArrow} from '../../../Icons/Icons'
import { dividerClasses } from '@mui/material';
export default function Drawer({className,children,side,sib}) {
    const classes=useStyles();
    const closeDrawer=()=>{
      let i=0;
      let dr=document.getElementsByClassName('drawer');
      for(i=0;i<dr.length;i++){
        
        document.getElementsByClassName('drawer')[i].parentNode.style.display="none"
        document.getElementsByClassName('drawer')[i].style.width="0%"
        document.getElementsByClassName(sib)[0].style.display="none"
        document.body.style.overflow="scroll"
      }
      
     
        document.body.style.backgroundColor="white"
         
         
         

    }
  return (
     <div className={classes.drawer_background}>
       <div className={classnames(classes.drawer_root,'drawer',className)} style={side==='left'?{'left':'0 !important'}:{'right':'0'}}>
        <div className={classes.drawer_header_box} style={side==='left'?{'direction':'rtl'}:{'direction':'ltr'}}>
          <span onClick={closeDrawer}><Close/></span>
        </div>

        {children}

       </div>
     </div>
  )
}
