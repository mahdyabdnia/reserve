import React, { useState } from 'react'
import useStyles from './styles'
import classnames from 'classnames'
import Modal from './Modal/Modal'
import supabase from '../../../supabaseClient'
export default function  () {
    const classes=useStyles()
    const [data, setData] = useState([])
    const openModal=()=>{
       document.getElementsByClassName('modal')[0].style.display="flex"
    }
    const onCreate=async()=>{
        const {data,error}=await supabase
        .from('plan')
        .select('*')
        if(error){
            
        }
        else{
            setData(data);
        }
    }
  return (
    <div className={classes.meals_root}> 
    <Modal className={'modal'} onCreate={onCreate}/>
    <h1 className={classes.title}>مدیریت  برنامه غذایی</h1>
    <div className={classes.ops_box}>
        <button className={classnames(classes.add_meals,classes.btn)} onClick={openModal}>
             افزودن 
        </button>

        <button className={classnames(classes.remove_meals,classes.btn)}>
            حذف
        </button>


        <button className={classnames(classes.cancel,classes.btn)}>
            لغو
        </button>
    </div>

    <div className={classes.meals_table_box}>
       <table className={classes.meals_table}>
        <thead className={classes.table_head}>
            <tr className={classes.table_row}>
            <th className={classes.table_header_data}>ردیف</th>
                <th className={classes.table_header_data}>روز هفته </th>
                <th className={classes.table_header_data}>وعده غذایی</th>
                <th className={classes.table_header_data}>نام غذا</th>
                <th className={classes.table_header_data}>توضیحات</th>
                <th className={classes.table_header_data}>تاریخ</th>
                <th className={classes.table_header_data}>عملیات</th>
                 
            </tr>
        </thead>
        <tbody className={classes.table_body}> 
            <tr className={classes.table_row}>
                <td className={classes.table_body_data}>a</td>
                <td className={classes.table_body_data}>a</td>
                <td className={classes.table_body_data}>a</td>
                <td className={classes.table_body_data}>a</td>
                <td className={classes.table_body_data}>a</td>
                <td className={classes.table_body_data}>a</td>
                <td className={classes.table_body_data}>a</td>
               
                
            </tr>
        </tbody>
       </table>


    </div>



    </div>
  )
}
