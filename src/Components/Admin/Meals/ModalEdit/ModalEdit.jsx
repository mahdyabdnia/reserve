import React,{useRef, useState,useEffect} from 'react'
import { Close, Down } from '../../../Icons/Icons'
import useStyles from './styles'
import classnames from 'classnames'
import supabase from  '../../../../supabaseClient'
export default function ModalEdit({className, editId,onUpdate}) { 
    const classes=useStyles()
    const menuRef = useRef([])
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [meal,setMealName] = useState('')
    const [mealid,setMealid] = useState('')
    const [name, setname] = useState('')
    const [desc, setdesc] = useState('')
    const [cat, setcat] = useState(0)
    const [catName, setcatName] = useState('')
    const [day, setday] = useState(-1)
    const [dayName, setdayName] = useState('')
    const [days, setDays] = useState([])
    const [categories, setCategories] = useState([])
     const openMenu=()=>{
        const menu=menuRef.current;
        if(menu.style.display==="flex"){
          menu.style.display="none"
        }
        else{
          menu.style.display="flex"
        }
     } 
     // open select boxes
     useEffect(() => {
         const openAndclose=(event)=>{
          const p=event.currentTarget.nextElementSibling;
          if(p.style.display==="none"){ p.style.display="flex"
        }
        else{
          p.style.display="none"
        } 
         }


         menuRef.current.forEach((element)=>{
          element.addEventListener('click',openAndclose);
         })
     
       return () => {
         menuRef.current.forEach((element)=>{
          element.removeEventListener('click',openAndclose);
         })
       }
     }, [ ])
     
    useEffect(() => {//////days fetching
      const fetchData=async ()=>{
        const {data,error}=await supabase
        .from('weekday')
        .select('*')
        if(error){
          console.log(error)
        }
        else{
          setDays(data)
        }
      }
    fetchData();
      return () => {
         
      }
    }, [])
    
     const clickMenu=(c,d)=>{
      setcat(c);
      setcatName(d)
      menuRef.current.style.display="none"
     }

       useEffect(() => {
          const fetchData=async()=>{
            const {data,error}=await supabase
            .from ('categories')
            .select('*')
        
            if(error){

            }
            else{
              setCategories(data);
            }
          }
          fetchData();
       
         return () => {
           
         }
       }, [])


       useEffect(() => {
         const fetchData=async()=>{
            const{data,error}=await supabase
            .from('plan')
            .select('*,weekday(*),meals(*),categories(*)')
            .eq('id',editId)
            if(error){
              console.log(error)
            }
            else{
              setData(data)
              console.log(data)
            }
            if (editId) {
              fetchData();
          } else {
              setError('ID مورد نظر مشخص نشده است');
          }}
         return () => {
           
         }
       }, [editId])

       useEffect(() => {
          if(data && data.length>0){
             
            setMealName(data[0].meals.name || '')
            setdesc(data[0].desc || '')
            setcatName(data[0].categories.name || '')
            
            setcat(data[0].categories.id || -1)
            setMealid(data[0].meals.id || -1)
          }
       
         return () => {
            
         }
       }, [data])
       
       
       

     useEffect(() => {
      const fetchData = async () => {
          try {
              const { data, error } = await supabase
                  .from('meals')
                  .select('*,categories!inner(name)')
                  .eq('id', editId);
  
              if (error) {
                  setError('خطا در افت داده');
              } else {
                  setData(data);
              }
          } catch (err) {
              setError('خطا در ارتباط با سرور');
              console.error(err);
          }
      };
  
      if (editId) {
          fetchData();
      } else {
          setError('ID مورد نظر مشخص نشده است');
      }
  }, [editId]);
  
  useEffect(() => {
      if (data && data.length > 0) {
          setname(data[0].name || '');
          setdesc(data[0].desc || '');
         
          setcat(data[0].category_id || 0);
          setcatName(data[0].categories.name|| '');
      }
  }, [data]);

     const handleSendNext=async()=>{
      const {data,error}=await supabase
      .from('meals')
      .update([{name:name,desc:desc,category_id:cat}])
       .eq('id',editId)

      if(error){
        setError('خطا در ارسال داده')
      }
      else{
        setcat(0)
        
        setname('')
        setdesc('')
        onUpdate();
        
      }
       
     }
     
    const closeModal=(event)=>{
    const parent=event.currentTarget.parentElement.parentElement;
    parent.style.display="none"
    }
  return (
    <div className={classnames(classes.modal_root,className)}>
        <div className={classes.modal_content}>
            <span className={classes.close_btn} onClick={closeModal}><Close/></span>
            <div className={classes.modal_box}>
               
              <form action=""  className={classes.form} >
                   

                   

      {/* انتخاب ایام هفته */}             <div className={classes.form_control}>
                    <label htmlFor="" className={classes.form_label}>ایام هفته</label>
                     
                     <div className={classes.select_box}>
                      <div className={classes.select} ref={(el)=>(menuRef.current[0]=el)}>
                        <span> {day===-1 && 'لطفا یک  روز در هفته   را انتخاب کنید'}  {day!==-1 && dayName} </span>
                        <span><Down/></span>
                      </div>

                      <div className={classes.option_box} >
                        {days.map((item)=>{
                          return(
                            <div className={classes.option} key={item.id} onClick={()=>{
                               
                            }}>
                              {item.day_name}
                        </div>
                          )
                        })}
                        
                        
                      </div>

                     </div>
                     
                   </div>

                    
      
      {/* انتخاب وعده غذایی */}             <div className={classes.form_control}>
      <label htmlFor="" className={classes.form_label}>   وعده غذایی</label>
                     
                     <div className={classes.select_box}>
                      <div className={classes.select} ref={(el)=>(menuRef.current[1]=el)}>
                        <span> {cat===0 && 'لطفا یک   وعده غذایی   را انتخاب کنید'}  {cat!==-0 && catName} </span>
                        <span><Down/></span>
                      </div>

                      <div className={classes.option_box} >
                        {categories.map((item)=>{
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

                      
      {/* انتخاب  غذایی */}             <div className={classes.form_control}>
      <label htmlFor="" className={classes.form_label}>    انتخاب غذا  </label>
                     
                     <div className={classes.select_box}>
                      <div className={classes.select} ref={(el)=>(menuRef.current[2]=el)}>
                        <span> {mealid===-1 && 'لطفا یک     غذا   را انتخاب کنید'}  {mealid!==0 && meal} </span>
                        <span><Down/></span>
                      </div>

                      <div className={classes.option_box} >
                        {categories.map((item)=>{
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
                    <label htmlFor="" className={classes.form_label}>توضیحات</label>
                     
                     <textarea name="" id="" cols="30" rows="10" className={classes.form_text} onChange={(e)=>{setdesc(e.target.value)}} value={desc}>{desc}</textarea>
                     
                   </div>
                     {/* desc */}         


              </form>
              <div className={classes.button_box}>
                    <button className={classes.button} onClick={closeModal}>ثبت غذا </button>
                    <button className={classes.button} onClick={handleSendNext}>ثبت و ادامه</button>
                    <button className={classes.button} onClick={closeModal}>لغو عملیات</button>
                    {error}
                    {data.name}
                    {data.name}
                    {editId}
                   </div>
            </div>
        </div>
    </div>
  )
}
