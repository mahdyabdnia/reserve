import React,{useState} from 'react'
import { Close, Down } from '../../Icons/Icons'
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
            <div className={classes.modal_box}>
              <form action=""  >
                   <div className={classes.form_control}>
                    <label htmlFor="" className={classes.form_label}>نام غذا</label>
                    <div className={classes.form_input_box}>
                      <input type="text" name="" id="" className={classes.form_input} />
                    </div>
                   </div>

                   <div className={classes.form_control}>
                    <label htmlFor="" className={classes.form_label}>توضیحات</label>
                     
                     <textarea name="" id="" cols="30" rows="10" className={classes.form_text}></textarea>
                     
                   </div>

                   <div className={classes.form_control}>
                    <label htmlFor="" className={classes.form_label}>وعده غذایی</label>
                     
                     <div className={classes.select_box}>
                      <div className={classes.select}>
                        <span>لطفا یک وعده غذایی را انتخاب کنید</span>
                        <span><Down/></span>
                      </div>

                      <div className={classes.option_box}>
                        <div className={classes.option}></div>
                        
                      </div>

                     </div>
                     
                   </div>

                   <div className={classes.form_control}>

                    <label htmlFor="" className={classes.form_label}>قیمت غذا</label>
                    <div className={classes.form_input_box}>
                      <input type="text"  className={classes.form_input}/>
                      <span>تومان</span>
                    </div>
                   </div>


              </form>
            </div>
        </div>
    </div>
  )
}
