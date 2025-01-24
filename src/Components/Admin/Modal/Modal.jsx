import React from 'react'
import { Close } from '../../Icons/Icons'
import useStyles from './styles'
export default function Modal({ref}) {
    const classes=useStyles()
    const closeModal=(event)=>{
    const parent=event.currentTarget.parentElement.parentElement;
    parent.style.display="none"
    }
  return (
    <div className={classes.modal_root} ref={ref}>
        <div className={classes.modal_content}>
            <span className={classes.close_btn} onClick={closeModal}><Close/></span>
        </div>
    </div>
  )
}
