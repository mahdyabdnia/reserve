import React, { useState } from 'react'
import useStyles from './styles'
import { collapseClasses } from '@mui/material'
import FoodCard from './FoodCard/FoodCard'
export default function ReserveBox() {
  const classes=useStyles()
  const [tabIndex, settabIndex] = useState(2)
  const handleTabActive=(tabIndex)=>{
   settabIndex(tabIndex)
  }
  
    return (
    <div className={classes.box_root}>
        <div className={classes.tab_box}>
          <ul className={classes.tab_list}>
            <li className={tabIndex===1?classes.tab_active:classes.tab_item} onClick={()=>{handleTabActive(1)}}>صبحانه</li>

            <li className={tabIndex===2?classes.tab_active:classes.tab_item} onClick={()=>{handleTabActive(2)}}>ناهار</li>
            <li className={tabIndex===3?classes.tab_active:classes.tab_item} onClick={()=>{handleTabActive(3)}}>شام</li>
            

          </ul>
         <span></span>
        </div>

        <div className={classes.food_box}>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        </div>
      
    </div>
  )
}
