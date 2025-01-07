import React from 'react'
import useStyles from './styles'
import { Password, User } from '../Consts/Icons';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const submitHandle=(event)=>{
         event.preventDefault()
    }
    const classes=useStyles();
    const navigate=useNavigate();
  return (
    <div className={classes.login_root}>
       <div className={classes.login_main}>

        <form action="" className={classes.login_form} onSubmit={submitHandle}>
            <div className={classes.login_control}>
            <label htmlFor="" className={classes.login_label}>نام کاربری</label>
            <input type="text"  className={classes.login_input} />
            <User/>
            </div>
            

            <div className={classes.login_control}>
            <label htmlFor="گذرواژه" className={classes.login_label}>گذرواژه</label>
            <input type="text"  className={classes.login_input}/>
            <Password/>
            </div>
            
            <input type="submit" className={classes.login_submit} value= {"ورود"} onClick={()=>{navigate('/home')}}/>
        </form>
       </div>
    </div>
  )
}
