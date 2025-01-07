import React from 'react'
import useStyles from './styles'
import { LeftArrow, RightArrow } from '../../Icons/Icons'

export default function FiltersBox() {
    const classes=useStyles()
  return (
    <div className={classes.root}> 
     <div className={classes.date_box}>
      <span className={classes.arrow}><RightArrow/></span>
      <input type="text" className={classes.date_input} autoSave='false' autoFocus="false" readOnly/>
      <span className={classes.arrow}><LeftArrow/></span>
     </div>
    </div>
  )
}
