import React, { useState,useRef } from 'react'
import useStyles from './styles'
import classnames from 'classnames'
import ReserveCard from './ReserveCard/ReserveCard'
import TimeBar from './TimeBar/TimeBar'
import { useNavigate } from 'react-router-dom' 

export default function ReservePage() {
  const navigate=useNavigate()
    const [tab, setTab] = useState(0)
    const [change, setchange] = useState(false)
    const tabs=[{name:'صبحانه'},{name:'ناهار'},{name:'شام'}]
    const weeks=[{name:'شنبه'},{name:'یکشنبه'},{name:'دوشنبه'},{name:'سه‌شنبه'},{name:'چهارشنبه'},{name:'پنجشنبه'},{name:'جمعه'},]
    const classes=useStyles();
    const tabRef=useRef();
    const handleTab=(c)=>{
       setchange(!change);
       setTab(c)
    }
  return (
    <div className={classes.root}>
        
      <div className={classes.time_filter_bar}>
         <TimeBar/>
      </div>

       <div className={classes.status_tool_bar}>
        <button className={classes.status_btn} onClick={()=>{navigate('/')}}>ذخیره</button>
        <button className={classes.status_btn}>افزایش اعتبار</button>
        </div> 
      <div className={classes.tabs_time}>
      {tabs.map((item,index)=>{
          return(
            <span className={classnames(tab===index?classes.tab_time_active:classes.tab_time)} onClick={()=>{handleTab(index)}} ref={tabRef}>{item.name}</span>
          )
        })}

      </div>
      <div className={classes.resv_box}>  
       {weeks.map((item)=>{
        return(
            <>
            <ReserveCard week={item.name} change={change} />
            </>
        )
       })}
      </div>
    </div>
  )
}
