import React from 'react'
import useStyles from './styles'
import { Down } from '../../../Icons/Icons';
 
export default function FoodCard() {
    const classes=useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.card_date}>
        <span>روز هفته</span>
        <span>تاریخ </span>
      </div>

      <div className={classes.card_info_box}>
        <div className={classes.site_box}>
            <span>موقعیت پیش‌ فرض</span>
            <span><Down/></span>

        </div>
        <div className={classes.select_box}>1</div>
      </div>
    </div>
  )
}
