import React, { useRef } from 'react'
import useStyles from './styles'
import { Close } from '../Icons/Icons';
import classnames from 'classnames'
export default function Modal(props) {
    const classes=useStyles();
    const modalRef = useRef(null)
    const closeModal=()=>{
     modalRef.current.style.display="none"
    }
  return (
    <div className={classnames(classes.modal_root,props.className)} ref={modalRef}>
      <div className={classes.modal_content}>
      <span className={classes.modal_close_btn} onClick={closeModal}><Close/></span>
      {props.children}

       
      </div>
      
    </div>
  )
}
