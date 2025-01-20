import React, { useState } from 'react'
import useStyles from './styles'
import { SearchSite, SearchSiteOut, Security, SecurityOut, Spoon, SpoonOut } from '../../../../Consts/Icons';

function Li({title,icon,iconHover,classA,classB,sib}){
  const [over, setOver] = useState(false) 
  const [ex,setEx]=useState(false);
  const extractContent=(event)=>{
   var parentSize=event.currentTarget.parentNode.childElementCount;
   var parent=event.currentTarget.parentNode;
   var i;
 
    if(parent.parentNode.parentNode.style.width==="100%"){
      parent.parentNode.parentNode.style.width='70px';
    
   parent.style.transition="0.25s width"
   parent.style.overflow='hidden'

   parent.parentNode.style.flexDirection="row"
   document.getElementsByClassName(sib)[0].style.display="flex"
    }
    else{
      parent.parentNode.parentNode.style.width='100%';
    
   parent.style.transition="0.25s width"
   parent.style.overflow='auto'

   parent.parentNode.style.flexDirection="row"
   document.getElementsByClassName(sib)[0].style.display="none"
    }
    

   for(i=0;i<parentSize;i++){
    
   }
   
  }
 
  return(
    <li className={over===false?classA:classB} onMouseOver={()=>{setOver(true)}} onMouseLeave={()=>{setOver(false)}} onClick={extractContent}><span>{over===false?icon:iconHover}</span>  <span>{title}</span> </li>
  )
}
export default function DrawerContent({sib}) {

  const [over, setOver] = useState(false)
    const classes=useStyles();
    const box=[{id:0,title:'سامانه تغذیه',icon:<Spoon className={classes.icon}/>,iconHover:<SpoonOut className={classes.icon}/>},
               {id:1,title:'امنیت',icon:<Security className={classes.icon}/>,iconHover:<SecurityOut className={classes.icon}/>},
               {id:2,title:'جستجو',icon:<SearchSite className={classes.icon}/>,iconHover:<SearchSiteOut className={classes.icon}/>}
   ]
  return (
    <div  className={classes.content_root}>
      <ul className={classes.content_list}>


        

        {box.map((item,index)=>{
          return(
            <Li classA={classes.content_list_item} classB={classes.content_list_item_over} title={item.title} icon={item.icon} iconHover={item.iconHover} sib={sib}></Li>
          )
        })}
        
      </ul>
      
      
    </div> 
  )
}

 
