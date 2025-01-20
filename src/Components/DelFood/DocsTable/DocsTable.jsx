import React,{useRef, useState} from 'react'
import useStyles from './styles'

export default function DocsTable() {
    const classes=useStyles();
      const checkRef = useRef(null)
      const [checkAll, setCheckAll] = useState(false)
      const controlAll=()=>{

      }
      const controlCheck=(e)=>{
       setCheckAll( e.target.checked )
      }
      const handleCheckFunctions=(e)=>{
        controlAll();
        controlCheck(e);
      }
  

  return (
    <div className={classes.doc_root}>
        <table className={classes.doc_table}>
         <thead>
            <th><input type="checkbox" name="" id="" ref={checkRef} checked={checkAll}  onChange={handleCheckFunctions}/></th>
            <th>تاریخ </th>
            <th>کد اعطا‌کننده</th>
            <th>اعطاکننده</th>
            <th>کد دریافت‌کننده</th>
            <th>وعده غذایی</th>
            <th>وضعیت دریافت</th>
         </thead>
         <tbody>
            <tr>
            <td><input type="checkbox" name="" id="" className={'check_box'}/></td>
            <td>تاریخ </td>
            <td>کد اعطا‌کننده</td>
            <td>اعطاکننده</td>
            <td>کد دریافت‌کننده</td>
            <td>وعده غذایی</td>
            <td>وضعیت دریافت</td>

            </tr>

            <tr>
            <td><input type="checkbox" name="" id="" className={'check_box'}/></td>
            <td>تاریخ </td>
            <td>کد اعطا‌کننده</td>
            <td>اعطاکننده</td>
            <td>کد دریافت‌کننده</td>
            <td>وعده غذایی</td>
            <td>وضعیت دریافت</td>

            </tr>

         </tbody>

        </table>
      
    </div>
  )
}
