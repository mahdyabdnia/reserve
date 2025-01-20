import React from 'react'
import useStyles from './styles'
import { Close } from '../../Icons/Icons';
import classnames from 'classnames'
export default function CreditModal({className}) {
    const classes=useStyles();
     const selectOption=[200000,500000,10000000]
     const closeModal=()=>{
        document.getElementsByClassName('creditModal')[0].style.display="none"
        document.body.style.overflow="scroll"
     }
  return (
    <div className={classnames(classes.modal_root,'creditModal')}>
     <div className={classes.modal_content}>
        <div className={classes.tool_bar}>
            <button className={classes.tool_button} onClick={closeModal}><Close/></button>
            <span>افزایش اعتبار</span>
        </div>

       <div className={classes.modal_main}>
       <div className={classes.input_control}>
        <label htmlFor="">مبلغ افزایش اعتبار</label>
        <input type="text" className={classes.modal_input} autoFocus/>
       </div>

       <div className={classes.modal_select_box}>
     
        {selectOption.map((i)=>{
            return(   <button className={classes.modal_select_button}>
                {i} تومان
            </button>)
        })}
         
       </div>

       <div className={classes.portal_select_box}>
        <p>لطفا درگاه مورد نظر خود را انتخاب کنید.</p>
        <div className={classes.portal_select}></div>
       </div>

       <button className={classes.portal_login_button}>ورود به درگاه </button>

       </div>
     </div>
    </div>
  )
}
