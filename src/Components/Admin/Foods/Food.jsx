import React from 'react'
import useStyles from './Styles';
import classnames from 'classnames'
export default function Food() {
    classes=useStyles();
  return (
    <div className={classes.foor_root}>
        <h1 className={classes.title}>مدیریت تغذیه</h1>
        <div className={classes.ops_box}>
            <button className={classnames(classes.add_food,mn_btn)}></button>
            <button className={classnames(classes.remove_food,mn_btn)}></button>
            <button className={classnames(classes.cancel,mn_btn)}></button>
        </div>

        <div className={classes.food_box}>
            <table className={classes.food_table}>
                <thead className={classes.table_row}>
                    <th className={classes.table_header}></th>
                    <th className={classes.table_header}>ردیف</th>
                    <th className={classes.table_header}>نام غذا</th>
                    <th className={classes.table_header}>وعده غذایی</th>
                    <th className={classes.table_header}>توضیحات</th>
                    <th>عملیات</th>
                </thead>
                <tbody>
                    <tr>
                        <td className={classes.table_data}>
                            <input type='checkbox'  value={false} />
                        </td>
                        <td className={classes.table_data}> 1</td>
                        <td className={classes.table_data}>نام غذا</td>
                        <td className={classes.table_data}>وعده غذایی</td>
                        <td className={classes.table_data}>توضیحات</td>
                        <td className={classes.tabel_data}>
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
