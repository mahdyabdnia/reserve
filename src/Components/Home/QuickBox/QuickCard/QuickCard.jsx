import React from 'react'
import useStyles from './styles'

export default function QuickCard({imgSrc,tag,onClick}) {
    const classes=useStyles();
  return (
    <div className={classes.card} onClick={onClick}>
        <img src={imgSrc}alt="" />
        <p>{tag}</p>
      
    </div>
  )
}
