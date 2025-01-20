import React from 'react'
import useStyles from './styles'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const classes=useStyles()
    const navigate=useNavigate()
    const controlForm=(e)=>{
e.preventDefault();
    }
  return (
    <div className={classes.login_root}  >
      <div className={classes.login_page}>
        <img src="images/logo.PNG" alt="" />
            <form action="" className={classes.form_box} onSubmit={controlForm} >
              <div className={classes.form_control}>
                <label htmlFor="" className={classes.form_label}>نام کاربری</label>
                <input type="text" name="" id="" className={classes.form_input} autoComplete=''/>
              </div>
              <div className={classes.form_control}>
                <label htmlFor="" className={classes.form_label}>گذرواژه</label>
                <input type="password"  autoComplete='' className={classes.form_input}/>
              </div>
              <input type="submit" value="ورود" className={classes.form_submit} onClick={()=>{navigate('/')}}/>
              <button className={classes.form_change_btn}>ورود از طریق شماره تلفن</button>
            </form>
            

      </div>
    </div>
  )
}
