import React,{useRef} from 'react'
import { Close } from '../Icons/Icons';
import useStyles from './styles'
import classnames from 'classnames'
export default function MessageModal({className,onDelete}) {
    const classes=useStyles();
    const modalRef=useRef();
    const closeModal=()=>{
        const modal=modalRef.current;
        modal.style.display="none"
    }
   const onYes=()=>{
        closeModal();
        onDelete();
    }
  return (
    <div className={classnames(classes.modal,className)} ref={modalRef}>
        <div className={classes.modal_content}>
            <span className={classes.close_btn} onClick={closeModal}><Close/></span>
            <div className={classes.modal_message}>
                آیا از انجام این عملیات مطمئن هستید؟
            </div>
            <div className={classes.modal_btn_box}>
                <button className={classes.btn_save} onClick={onYes}>بله </button>
                <button className={classes.btn_cancel}>خیر</button>
            </div>
        </div>

    </div>
  )
}
