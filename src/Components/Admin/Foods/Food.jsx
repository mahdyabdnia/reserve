import React, { useEffect, useRef,useState } from 'react'
import useStyles from './Styles';
import classnames from 'classnames'
import Modal from '../Modal/Modal';
import ModalEdit from './Modal/Modal'
import supabase from '../../../supabaseClient';
import MessageModal from '../../MessageModal/MessageModal';
export default function Food() {
    const classes=useStyles();
    const modalRef = useRef(null)
    const [item, setItem] = useState([])
    const [editId, seteEditId] = useState()
    const [delId,setDelId]=useState()
    const openModal=(c,d)=>{
       seteEditId(c);
       const modal=document.getElementsByClassName(d)[0];
       modal.style.display="flex";

       
    }

    const deleteItms=async(id)=>{
        const modal=document.getElementsByClassName('message')[0];
        modal.style.display="flex";
        setDelId(id);
    }
    const onDelete=async()=>{
        
        const {error}=await supabase
        .from('meals')
        .delete()
        .eq('id',delId)
        if(error){

        }
        else{
            setItem((prevItems) => prevItems.filter((meal) => meal.id !== delId));
        }
    }
    const fetchData = async () => {
        const { data, error } = await supabase
            .from('meals')
            .select('*,categories!inner(name)');
    
        if (error) {
            console.error(error);
        } else {
            setItem(data);
        }
    };

    useEffect(() => {
   const fetchData=async ()=>{
    const {data,error}=await supabase
    .from('meals')
    .select('*,categories!inner(name)')

    if(error){

    }
    else{
        setItem(data)
    }
   }
    fetchData();
      return () => {
        
      }
    }, [])
    
  return (
    <div className={classes.food_root}>
    <Modal  className={'addModal'} onCreate={fetchData} />
    <ModalEdit  className={'editModal'} editId={editId} onUpdate={fetchData}/>
    <MessageModal className={'message'} onDelete={onDelete}/>
        <h1 className={classes.title}>مدیریت تغذیه</h1>
        <div className={classes.ops_box}>
            <button className={classnames(classes.add_food,classes.mn_btn)} onClick={()=>{openModal('','addModal')}}>افزودن غذا</button>
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
                    {item.map((it,index)=>{
                        return(
                            <tr className={classes.table_row} key={it.id}>
                        <td className={classes.table_data}>
                            <input type='checkbox'  value={false} />
                        </td>
                        <td className={classes.table_data}> {index+1}</td>
                        <td className={classes.table_data}>{it.name}  </td>
                        <td className={classes.table_data}>   {it.categories.name}</td>
                        <td className={classes.table_data}>{it.desc}</td>
                        <td className={classes.table_data}>
                            <button className={classes.up_button} onClick={()=>{openModal(it.id,'editModal')}}>تغییر</button>
                            <button className={classes.remove_button} onClick={()=>{deleteItms(it.id)}}>حذف</button>
                        </td>
                    </tr>
                        )
                    })}
                    

                </tbody>

            </table>
        </div>
    </div>
  )
}
