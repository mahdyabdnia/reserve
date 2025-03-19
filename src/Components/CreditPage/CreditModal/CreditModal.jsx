import React, { useState } from 'react'
import useStyles from './styles'
import { Close } from '../../Icons/Icons';
import classnames from 'classnames'
export default function CreditModal({className}) {
    const classes=useStyles();
    const [option,setOption]=useState('')
    const handleOptionChange=(event)=>{
    setOption(event.target.value);
    }
    const handleChange = (e) => {
      const inputValue = e.target.value;
      // فقط اعداد را بپذیرید
      if (/^\d*$/.test(inputValue)) {
          setval(inputValue);
      }
  };
     const selectOption=[200000,500000,10000000]
     const displayOptions = selectOption.map(option => option.toLocaleString('fa-IR'));
     const [val, setval] = useState('')
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
        <label htmlFor="">مبلغ افزایش اعتبار :</label>
        <div className={classes.input_box}>
        <input type="text" className={classes.modal_input} autofocus value={val} onChange={handleChange}/>
           <span>تومان</span>
        </div>
       </div>

       <div className={classes.modal_select_box}>
     
        {displayOptions.map((i)=>{
            return(   <button className={classes.modal_select_button} onClick={()=>{setval(i)}}>
                {i} تومان
            </button>)
        })}
         
       </div>

       <div className={classes.portal_select_box}>
        <p>لطفا درگاه مورد نظر خود را انتخاب کنید.</p>
        <div className={classes.portal_select}>
          <div className={classes.portal}>
            <img src="images/zarinpal.png" alt="" className={classes.portal_img}/>
          <input type="radio" 
          value='option1'
          onChange={(e)=>{handleOptionChange(e)}}
          checked={option==='option1'}
           
          
          />
          </div>

          <div className={classes.portal}>
            <img src="images/melat.png" alt=""  className={classes.portal_img}/>
          <input type="radio"
           value='option2'
           onChange={(e)=>{handleOptionChange(e)}}
           checked={option==='option2'} />
          </div>
        </div>
       </div>

       <button className={classes.portal_login_button}>ورود به درگاه </button>

       </div>
     </div>
    </div>
  )
}
