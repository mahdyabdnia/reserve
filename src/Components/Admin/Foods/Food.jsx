import React, { useRef } from 'react'
import useStyles from './Styles';
import classnames from 'classnames'
import Modal from '../Modal/Modal';
export default function Food() {
    const classes=useStyles();
    const modalRef = useRef(null)
    const openModal=()=>{
        const modal=modalRef.current;
        if(modal){
            modal.style.display="flex"
        }
       
    }
  return (
    <div className={classes.food_root}>
    <Modal ref={modalRef}/>
        <h1 className={classes.title}>مدیریت تغذیه</h1>
        <div className={classes.ops_box}>
            <button className={classnames(classes.add_food,classes.mn_btn)} onClick={openModal}>افزودن غذا</button>
            <button className={classnames(classes.remove_food,classes.mn_btn)}>حذف غذا</button>
            <button className={classnames(classes.cancel,classes.mn_btn)}>لغو عملیات</button>
        </div>

        <div className={classes.food_box}>
            <table className={classes.food_table}>
                <tr className={classes.table_row}>
                    <th className={classes.table_header}>
                    <input type='checkbox'  value={false} />
                    </th>
                    <th className={classes.table_header}>ردیف</th>
                    <th className={classes.table_header}>نام غذا</th>
                    <th className={classes.table_header}>وعده غذایی</th>
                    <th className={classes.table_header}>توضیحات</th>
                    <th className={classes.table_header}>عملیات</th>
                </tr>
                <tbody>
                    <tr className={classes.table_row}>
                        <td className={classes.table_data}>
                            <input type='checkbox'  value={false} />
                        </td>
                        <td className={classes.table_data}> 1</td>
                        <td className={classes.table_data}>نام غذا</td>
                        <td className={classes.table_data}>وعده غذایی</td>
                        <td className={classes.table_data}>توضیحات</td>
                        <td className={classes.table_data}>
                            <button className={classes.up_button}>تغییر</button>
                            <button className={classes.remove_button}>حذف</button>
                        </td>
                    </tr>

                </tbody>

            </table>
        </div>
    </div>
  )
}
