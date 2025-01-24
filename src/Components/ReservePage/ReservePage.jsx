import React, { useState, useRef, useEffect } from 'react';
import useStyles from './styles';
import classnames from 'classnames';
import ReserveCard from './ReserveCard/ReserveCard';
import TimeBar from './TimeBar/TimeBar';
import { useNavigate } from 'react-router-dom';
import CreditModal from '../CreditPage/CreditModal/CreditModal';
import supabase from '../../supabaseClient'; // مطمئن شوید که این ایمپورت درست است

export default function ReservePage() {
    const navigate = useNavigate();
    const [tab, setTab] = useState(0);
    const [change, setChange] = useState(false);
    const [tabs, setTabs] = useState([]); // برای ذخیره وعده‌های غذایی فچ شده
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const weeks = [
        { name: 'شنبه' },
        { name: 'یکشنبه' },
        { name: 'دوشنبه' },
        { name: 'سه‌شنبه' },
        { name: 'چهارشنبه' },
        { name: 'پنجشنبه' },
        { name: 'جمعه' },
    ];
    const classes = useStyles();
    const tabRef = useRef();

    const openModal = () => {
        document.getElementsByClassName('creditModal')[0].style.display = "flex";
        document.body.style.overflow = "hidden";
    };

    const handleTab = (c) => {
        setChange(!change);
        setTab(c);
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data, error } = await supabase
                    .from('categories') // نام جدول
                    .select('name'); // فقط فیلد نام را انتخاب می‌کنیم

                if (error) throw error;

                setTabs(data.map(category => ({ name: category.name }))); // داده‌ها را به آرایه تبدیل می‌کنیم
            } catch (error) {
                setError('خطا در بارگذاری وعده‌های غذایی');
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []); // فقط در بارگذاری اولیه اجرا می‌شود

    if (loading) return <div>در حال بارگذاری...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={classes.root}>
            <div className={classes.time_filter_bar}>
                <TimeBar />
            </div>

            <div className={classes.status_tool_bar}>
                <button className={classes.status_btn} onClick={() => { navigate('/'); }}>ذخیره</button>
                <button className={classes.status_btn} onClick={openModal}>افزایش اعتبار</button>
                <CreditModal className={'crd'} />
            </div>
            <div className={classes.tabs_time}>
                {tabs.map((item, index) => {
                    return (
                        <span
                            key={index}
                            className={classnames(tab === index ? classes.tab_time_active : classes.tab_time)}
                            onClick={() => { handleTab(index); }}
                            ref={tabRef}
                        >
                            {item.name}
                        </span>
                    );
                })}
            </div>
            <div className={classes.resv_box}>
                {weeks.map((item) => {
                    return (
                        <ReserveCard key={item.name} week={item.name} change={change} />
                    );
                })}
            </div>
        </div>
    );
}