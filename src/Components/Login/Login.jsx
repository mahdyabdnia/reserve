import React,{useRef,useEffect,useState} from 'react'
import useStyles from './styles'
import { useNavigate } from 'react-router-dom'
import { Eye } from 'react-feather'


export default function Login() {
    const classes=useStyles()
    const navigate=useNavigate() 
    const eyeRef=useRef(null);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userMass, setUserMass] = useState('')
    const [passMass, setPassMass] = useState('')
    const [mass, setMass] = useState('')
    const passRef=useRef(null);
    const [show, setShow] = useState(false) 
    const login=()=>{
      if(username!== '' && password!==''){
        navigate('/')
      }

      else if(password==='' && username===''){
        setMass('لطفا نام کاربری و گذرواژه را وارد کنید')
        setUserMass('')
        setPassMass('')
      }
      else if(username===''){
        setPassMass('لطفا نام کاربری را وارد کنید')
        setMass('')
        setUserMass('')
      }
      else if(password===''){
        setUserMass('لطفا گذرواژه را وارد کنید')
        setMass('')
        setPassMass('')
      }
      }
    const controlForm=(e)=>{
e.preventDefault();
    }

    useEffect(() => {
      const input=passRef.current;
        return () => {
           if(show===true){
            input.type="text"
           }
           else{
            input.type="password"
           }
        }
      }, [show])
    
  return (
    <div className={classes.login_root}  >
      <div className={classes.login_page}>
     
            <form action="" className={classes.form_box} onSubmit={controlForm} >
              <div className={classes.form_control}>
                <label htmlFor="" className={classes.form_label}> شماره دانشجویی  </label>
              <div className={classes.form_card}>
              <input type="text" name="" id="" className={classes.form_input} autoComplete='' required value={username}  onChange={(e) => /^\d*$/.test(e.target.value) && setUsername(e.target.value)} autoFocus/>
              </div>
               
              </div>
              <div className={classes.form_control}>
                <label htmlFor="" className={classes.form_label}>گذرواژه</label>
                <div className={classes.form_card}>
                <input type="password"  autoComplete='' className={classes.form_input} ref={passRef} value={password} required onChange={(e)=>{setPassword(e.target.value)}} />
                <button className={classes.eye_btn} ref={eyeRef} onClick={()=>{setShow(!show)}}><Eye/></button>
                </div>
              
              </div>
              <input type="submit" value="ورود" className={classes.form_submit} onClick={login}/>
              <button className={classes.form_change_btn}> {passMass} {userMass} {mass}</button>
            </form>
            

      </div>
    </div>
  )
} 
