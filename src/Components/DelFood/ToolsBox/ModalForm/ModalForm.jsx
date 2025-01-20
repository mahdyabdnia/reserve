import React, { useRef, useState } from 'react'
import useStyles from './styles'
import { User } from '../../../Consts/Icons'
import classnames from 'classnames'
import { Down, MoreHorz } from '../../../Icons/Icons'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {redirect, useNavigate} from 'react-router-dom'
export default function ModalForm(props) {
    const classes=useStyles( )
    const [val, setVal] = useState('انتخاب نشده');
    const navigate=useNavigate();
    const vars=['صبحانه','ناهار','شام']
   const handleSubmit=(e)=>{
  e.preventDefault();
 redirect('/del')
   }
    const openMenu=()=>{
      if(select_menu.current.style.display==='flex'){
        select_menu.current.style.display="none";

      }
      else{
        select_menu.current.style.display="flex"
      }
    }
    
    const select_menu = useRef(null)
    
  return (
    <div className={classes.form_root}>
        <form action="" className={classes.form} onSubmit={handleSubmit}>
             <div className={classes.form_box}>
              <div className={classes.form_control}><label htmlFor="">اعطا‌کننده:</label>
              <div className={classes.form_input} >
                <span><User/></span>
                <input type="text" className={classes.form_id_number}/>
                <input type="text" className={classes.form_person_info}/>
              </div>
              </div>
              <div className={classes.form_control}><label htmlFor="">دریافت‌کننده:</label>
              <div className={classes.form_input}>
              <span><User/></span>
                <input type="text" className={classes.form_id_number}/>
                <input type="text" className={classes.form_person_info}/>

              </div>
              </div>
              </div> 

              <div className={classes.form_box}>
                <div className={classes.form_control}><label htmlFor="">از‌ تاریخ:</label>
                <div className={classes.form_inputTwo} >
                 <input type="text" className={classes.date_input}/>
                 <span><CalendarMonthIcon/></span>
                </div>
                </div>
                <div className={classes.form_control}><label htmlFor="">تا تاریخ :</label>
                <div className={classes.form_inputTwo}>
 <input type="text" className={classes.date_input} style={{width:'85% !important',maxWidth:'85%'}}/>
 <span><CalendarMonthIcon/></span>
                </div>
                </div>
              </div>
              <div className={classes.form_box}>
                <div className={classes.form_control}>
                  <label htmlFor="">وعده غذا :</label>
<div className={classes.form_input}>
  <div className={classes.form_select_box} onClick={openMenu}>
    <span>{val}</span>
    <span><Down/></span>

    
  </div>
  <div className={classes.select_box} ref={select_menu}>
      {vars.map((item )=>{
        return(
          <div onClick={()=>{setVal(item)}} className={classes.select_menu_item}>
          {item}
        </div>
        )
        
      })}
    </div>
</div>

                </div>
              </div>

           <div className={classes.form_box}>
           <div className={classes.form_control}>
            <input type="submit" value="ذخیره" className={classnames(classes.form_submit,props.className)} />
           </div>
           </div>
        
        </form>
      
    </div>
  )
}
