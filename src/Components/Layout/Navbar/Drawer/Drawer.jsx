import React, { Children } from 'react'
import useStyles from './styles'
import classnames from 'classnames'
import { Close, Fork, PowerOff } from '../../../Consts/Icons';
import {Left, LeftArrow} from '../../../Icons/Icons'
export default function Drawer({className,children,side}) {
    const classes=useStyles();
    const closeDrawer=()=>{
      let i=0;
      let dr=document.getElementsByClassName('drawer');
      for(i=0;i<dr.length;i++){
        document.getElementsByClassName('drawer')[i].style.width="0px"
      }
      
     
        document.body.style.backgroundColor="white"
        const elements=document.querySelectorAll('body *');
        for(let i=0;i<elements.length;i++){
            elements[i].style.pointerEvents="auto"
        }
        const drawers = document.getElementsByClassName('drawer');
        for(let j=0;j<drawers.length;j++){
          const drawerElements=drawers[j].querySelectorAll('*');
          for (let i = 0; i < drawerElements.length; i++) {
         
            drawerElements[i].style.display="none"
            drawerElements[i].style.transition='0.1s';
        }
        }

    }
  return (
    <div  className={classnames(classes.drawer_root,className,'drawer')} style={side==="left"?{left:'0'}:{right:'0'}}>
      <div className={classes.drawer_content}>
      {side!=="left" && <span className={classes.close} onClick={closeDrawer}><Close/></span>}
      {side==="left" &&
      <span  className={classes.leftSideTools}>
        <span onClick={closeDrawer}><Close/></span>
        <span><PowerOff/></span>

      </span>
      
      
      }  

      

      
         {children}
      
       </div> 
    </div>
  )
}
