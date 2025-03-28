import React, { useRef, useEffect, useState } from 'react';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
import { Eye } from 'react-feather';
import supabase from '../../supabaseClient';

export default function Login({ onLogin }) {
    const classes = useStyles();
    const navigate = useNavigate();
    const eyeRef = useRef(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const passRef = useRef(null);
    const [show, setShow] = useState(false);

    const login = async () => {
        if (username !== '' && password !== '') {
            console.log('Trying to log in...');

            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('username', username)
                .single();

            if (error) {
                console.error('Error fetching user:', error.message);
                setMessage('خطا در بارگذاری اطلاعات کاربران');
                return;
            }

            console.log('User data:', data);

            if (!data) {
                setMessage('کاربری با این نام کاربری وجود ندارد');
            } else if (data.password !== password) {
                setMessage('گذرواژه نادرست است');
            } else {
                console.log('Login successful!');
                navigate('/');
                onLogin();
                localStorage.setItem('authToken','auth is successful')
            }
        } else {
            setMessage('لطفا نام کاربری و گذرواژه را وارد کنید');
        }
    };

    const handleKeyDown=async(e)=>{
      if(e.key==='enter'){
      e.preventDefault();
       if (username !== '' && password !== '') {
            console.log('Trying to log in...');

            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('username', username)
                .single();

            if (error) {
                console.error('Error fetching user:', error.message);
                setMessage('خطا در بارگذاری اطلاعات کاربران');
                return;
            }

            console.log('User data:', data);

            if (!data) {
                setMessage('کاربری با این نام کاربری وجود ندارد');
            } else if (data.password !== password) {
                setMessage('گذرواژه نادرست است');
            } else {
                console.log('Login successful!');
                navigate('/');
                onLogin();
            }
        } else {
            setMessage('لطفا نام کاربری و گذرواژه را وارد کنید');
        }
      
    }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    useEffect(() => {
        const input = passRef.current;
        input.type = show ? "text" : "password";
    }, [show]);

    return (
        <div className={classes.login_root}>
            <div className={classes.login_page}>
                <form action="" className={classes.form_box} onSubmit={handleSubmit}>
                    <div className={classes.form_control}>
                        <label htmlFor="" className={classes.form_label}> شماره دانشجویی </label>
                        <div className={classes.form_card}>
                            <input
                                type="text"
                                className={classes.form_input}
                                autoComplete=''
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                autoFocus
                            />
                        </div>
                    </div>
                    <div className={classes.form_control}>
                        <label htmlFor="" className={classes.form_label}>گذرواژه</label>
                        <div className={classes.form_card}>
                            <input
                                type="password"
                                autoComplete=''
                                className={classes.form_input}
                                ref={passRef}
                                value={password}
                                required
                                onChange={(e) => { setPassword(e.target.value); }}
                            />
                            <button
                                type="button"
                                className={classes.eye_btn}
                                ref={eyeRef}
                                onClick={() => { setShow(!show); }}
                            >
                                <Eye />
                            </button>
                        </div>
                    </div>
                    <input type="submit" value="ورود" className={classes.form_submit} onKeyDown={handleKeyDown}/>
                    <div className={classes.form_change_btn}>{message}</div>
                </form>
            </div>
        </div>
    );
}