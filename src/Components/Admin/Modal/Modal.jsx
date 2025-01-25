import React,{useRef, useState,useEffect} from 'react'
import { Close, Down } from '../../Icons/Icons'
import useStyles from './styles'
import supabase from '../../../supabaseClient'
export default function Modal({ref}) {
    const classes=useStyles()
    const menuRef = useRef(null)
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [name, setname] = useState('')
    const [desc, setdesc] = useState('')
    const [cat, setcat] = useState(0)
    const [catName, setcatName] = useState('')
    const [price, setprice] = useState(0)
     const openMenu=()=>{
        const menu=menuRef.current;
        if(menu.style.display==="flex"){
          menu.style.display="none"
        }
        else{
          menu.style.display="flex"
        }
     } 

     const clickMenu=(c,d)=>{
      setcat(c);
      setcatName(d)
      menuRef.current.style.display="none"
     }

     useEffect(() => {
         const fetchData=async()=>{
                 const {data,error}=await supabase
                 .from('categories')
                 .select('*')

                 if(error){
                  setError('خطا در دریافت داده')
                 }
                 else{
                  setData(data)
                 }
         }

         fetchData()
       return () => {
         
       }
     }, [])

     const controlForm=async(event)=>{ 
      event.preventDefault();
      const {data,error}=await supabase
      .from('meals')
      .insert([{name:name,desc:desc,price:price,category_id:cat}])

      if(error){
        setError('خطا در ارسال داده')
      }
      else{
        setcat(0)
        setprice(0)
        setname('')
        setdesc('')
      }
     }
     
    const closeModal=(event)=>{
    const parent=event.currentTarget.parentElement.parentElement;
    parent.style.display="none"
    }
  return (
    <div className={classes.modal_root} ref={ref}>
        <div className={classes.modal_content}>
            <span className={classes.close_btn} onClick={closeModal}><Close/></span>
            <div className={classes.modal_box}>
              <form action=""  className={classes.form} onSubmit={controlForm}>
                   <div className={classes.form_control}>
                    <label htmlFor="" className={classes.form_label}>نام غذا</label>
                    <div className={classes.form_input_box}>
                      <input type="text" name="" value={name} id="" className={classes.form_input} onChange={(e)=>{setname(e.target.value)}}/>
                    </div>
                   </div>

                   <div className={classes.form_control}>
                    <label htmlFor="" className={classes.form_label}>توضیحات</label>
                     
                     <textarea name="" id="" cols="30" rows="10" className={classes.form_text} onChange={(e)=>{setdesc(e.target.value)}}>{desc}</textarea>
                     
                   </div>

                   <div className={classes.form_control}>
                    <label htmlFor="" className={classes.form_label}>وعده غذایی</label>
                     
                     <div className={classes.select_box}>
                      <div className={classes.select} onClick={openMenu}>
                        <span> {cat===0 && 'لطفا یک وعده غذایی را انتخاب کنید'}  {cat!==0 && catName} </span>
                        <span><Down/></span>
                      </div>

                      <div className={classes.option_box} ref={menuRef}>
                        {data.map((item)=>{
                          return(
                            <div className={classes.option} key={item.id} onClick={()=>{
                              clickMenu(item.id,item.name)
                            }}>
                              {item.name}
                        </div>
                          )
                        })}
                        
                        
                      </div>

                     </div>
                     
                   </div>

                   <div className={classes.form_control}>

                    <label htmlFor="" className={classes.form_label}>قیمت غذا</label>
                    <div className={classes.form_input_box}>
                      <input type="text"  className={classes.form_input} value={price} onChange={(e)=>{setprice(e.target.value)}}/>
                      <span>تومان</span>
                    </div>
                   </div>

                   


              </form>
              <div className={classes.button_box}>
                    <button className={classes.button} onClick={closeModal}>ثبت غذا </button>
                    <button className={classes.button}>ثبت و ادامه</button>
                    <button className={classes.button} onClick={closeModal}>لغو عملیات</button>
                    {error}
                    {data.name}
                   </div>
            </div>
        </div>
    </div>
  )
}
