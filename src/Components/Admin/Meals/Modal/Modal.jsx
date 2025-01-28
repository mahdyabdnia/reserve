import React,{useRef, useState,useEffect} from 'react'
import { Close, Down } from '../../../Icons/Icons'
import useStyles from './styles'
import classnames from 'classnames'
import supabase from '../../../../supabaseClient'
export default function Modal({ref,className,onCreate}) {
    const classes=useStyles()
    const menuRef = useRef([])
    const [data, setData] = useState([])
    const [days,setDays]=useState([])
    const [day, setDay] = useState(-1)
    const [dayName, setDayName] = useState('')
    const [mealid, setMealid] = useState(-1)
    const [mealName, setMealName] = useState('')
    const [error, setError] = useState('')
    const [name, setname] = useState('')
    const [desc, setdesc] = useState('')
    const [cat, setcat] = useState(0)
    const [catName, setcatName] = useState('')
    const [price, setprice] = useState(0)
    const [meal, setMeal] = useState([])
    const modalRef = useRef(null)
     const openMenu=()=>{
        const menu=menuRef.current;
        if(menu.style.display==="flex"){
          menu.style.display="none"
        }
        else{
          menu.style.display="flex"
        }
     } 

     useEffect(() => {

      const openClose=(event)=>{
      const p=event.currentTarget.nextElementSibling;
    if(p.style.display==="none"){ p.style.display="flex"
  }
  else{
    p.style.display="none"
  } 
      }
        if(menuRef.current){
          menuRef.current.forEach((element)=>{
            if(element){
            element.addEventListener('click',openClose)}
          })
        }
      
       return () => {
         if(menuRef.current){
          menuRef.current.forEach((element)=>{
            if(element){ element.removeEventListener('click',openClose)}
           
          })
         }
       }
     }, [])
     

     const clickMenu=(c,d)=>{
      
     setDay(c)
     setDayName(d);
       }
       const clickCatMenu=(c,d)=>{
      
        setcat(c)
        setcatName(d);
          }

      const clickMeal=(c,d)=>{
        setMealid(c);
        setMealName(d);
      }

     useEffect(() => {//دریافت اطلاعات مربوط به وعده‌ غدایی
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


     useEffect(() => {
        const fetchData=async ()=>{ // دریافت اطلاعات مربوط به لیست غذاهای مربوط به یک وعده غذایی
          const {data,error}=await supabase
          .from('meals')
          .select('*')
          .eq('category_id',cat)




          if(error){
            console.log(error)
             }
             else{
               setMeal(data)
               console.log(data)
             }
        } 

       
        fetchData()
       return () => {
          
       }
     }, [cat])
     


     useEffect(() => {
        const fetchData=async()=>{  // دریافت لیست روزهای هفته 
           const{data,error}=await supabase
           .from('weekday')
           .select('*')
           if(error){
                  setError('خطا در دریافت داده')
           }
           else{
            setDays(data)
            console.log(data);
           }
        }
     fetchData();
       return () => {
       
       }
     }, [])
     

     const controlForm=async(event)=>{ 
     
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
        menuRef.current.parentElement.style.display="none"
        
      }
     }

     const handleSendNext=async()=>{// ثبت و لیت بعدی
      const {data,error}=await supabase
      .from('plan')
      .insert([{meals_id:mealid ,weekday_id:day ,desc:desc,category_id:cat,time:new Date()}])

      if(error){
        setError('خطا در ارسال داده')
      }
      else{
        setcat(0)
        setprice(0)
        setMealid(-1)
        setMealName('')
        setDayName('')
       
        setname('')
        setdesc('')
        onCreate();
        
      }
       
     }

     const saveSend=async()=>{ // ثبت و خروج از فرم
      const {error}=await supabase
      .from('plan')
      .insert([{meals_id:mealid ,weekday_id:day ,desc:desc,category_id:cat,time:new Date()}])
      if(error){
        setError('خطا در ارسال داده')
        console.log(error);
      }
      else{
        setcat(0)
        setprice(0)
        setMealid(-1)
        setMealName('')
        setDayName('')
       
        setname('')
        setdesc('')
        onCreate();
        const menu=modalRef.current;
        menu.style.display="none"

        
      }

      }
     
     
    const closeModal=(event)=>{
    const parent=modalRef.current;
    parent.style.display="none"
    
    setcat(0)
    setprice(0)
    setname('')
    setdesc('')
    setcatName('')
    }
  return (
    <div className={classnames(classes.modal_root,className)} ref={modalRef}>
        <div className={classes.modal_content}>
            <span className={classes.close_btn} onClick={closeModal}><Close/></span>
            <div className={classes.modal_box}>
              <form action=""  className={classes.form} onSubmit={controlForm}>
                   
              <div className={classes.form_control}>
                    <label htmlFor="" className={classes.form_label}> ایام هفته  </label>
                     
                     <div className={classes.select_box}>
                      <div className={classes.select} ref={(el)=>(menuRef.current[0]=el)}>
                        <span> {day===-1 &&'لطفاً یک  روز از هفته را انتخاب کنید' }  {day!==-1 && dayName} </span>
                        <span><Down/></span>
                      </div>

                      <div className={classes.option_box} >
                        {days.map((item)=>{
                          return(
                            <div className={classes.option} key={item.id} onClick={(event)=>{ clickMenu(item.id,item.day_name) }}>
                              {item.day_name}
                        </div>
                          )
                        })}
                        
                        
                      </div>

                     </div>
                     
                   </div>    {/* اک  weekdays  */}

                   <div className={classes.form_control}>
                    <label htmlFor="" className={classes.form_label}>وعده غذایی</label>
                     
                     <div className={classes.select_box}>
                      <div className={classes.select} ref={(el)=>(menuRef.current[1]=el)}>
                        <span> {cat===0 && 'لطفا یک وعده غذایی را انتخاب کنید'}  {cat!==0 && catName} </span>
                        <span><Down/></span>
                      </div>

                      <div className={classes.option_box} >
                        {data.map((item)=>{
                          return(
                            <div className={classes.option} key={item.id} onClick={()=>{clickCatMenu(item.id,item.name)}}>
                              {item.name}
                        </div>
                          )
                        })}
                        
                        
                      </div>

                     </div>
                     
                   </div>  {/* meal_cat */}
                    

                   <div className={classes.form_control}>
                    <label htmlFor="" className={classes.form_label}> انتخاب غذا  </label>
                     
                     <div className={classes.select_box}>
                      <div className={classes.select} ref={(el)=>(menuRef.current[2]=el)}>
                        <span> {mealid===-1 && 'لطفا یک  غذا  را انتخاب کنید'}  {mealid!==-1 && mealName} </span>
                        <span><Down/></span>
                      </div>

                      <div className={classes.option_box} >
                        {meal.map((item)=>{
                          return(
                            <div className={classes.option} key={item.id} onClick={()=>{clickMeal(item.id,item.name)}}>
                              {item.name}
                        </div>
                          )
                        })}
                        
                        
                      </div>

                     </div>
                     
                   </div>  {/* meal_select */}

                   <div className={classes.form_control}>
                    <label htmlFor="" className={classes.form_label}>توضیحات</label>
                     
                     <textarea name="" id="" cols="30" rows="10" className={classes.form_text} onChange={(e)=>{setdesc(e.target.value)}} value={desc}>{desc}</textarea>
                     
                   </div>
                     {/* desc */}
                   

                 

                   


              </form>
              <div className={classes.button_box}>
                    <button className={classes.button} onClick={saveSend}>ثبت غذا </button>
                    <button className={classes.button} onClick={handleSendNext}>ثبت و ادامه</button>
                    <button className={classes.button} onClick={closeModal}>لغو عملیات</button>
                    {error}
                    {data.name}
                   </div>
            </div>
        </div>
    </div>
  )
}
