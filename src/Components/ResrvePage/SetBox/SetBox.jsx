import React from 'react'
import useStyles from './styles'

export default function SetBox() {
    const classes=useStyles();
  return (
    <div className={classes.box_root}>
        <button className={classes.btn}>ذخیره </button>
        <button className={classes.btn}> افزایش اعتبار</button>
      
    </div>
  )
}
