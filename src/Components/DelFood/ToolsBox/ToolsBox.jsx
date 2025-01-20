import React, { useEffect } from 'react'
import useStyles from './styles'
import { Add, Close } from '../../Icons/Icons';
import { EditIcon, EyesIcon } from '../../Consts/Icons';
import Modal from '../../Modal/Modal'
import { ManOutlined } from '@mui/icons-material';
import ModalForm from './ModalForm/ModalForm';
export default function ToolsBox() {
    const classes=useStyles();
    const openModal=(c)=>{
    var modal=document.getElementsByClassName(c);
    var i;
    for( i=0;i<modal.length;i++){
      modal[i].style.display="flex"
    }
    }

    useEffect(() => {
       const closeModal=(event)=>{
        document.getElementsByClassName('cr')[0].style.display="none"
       }
       document.getElementsByClassName('submit')[0].addEventListener('click',closeModal);
       

    
      return () => {
        document.getElementsByClassName('submit')[0].removeEventListener('click',closeModal);
      }
    }, [ ])
    useEffect(() => {
      const closeModal=(event)=>{
       document.getElementsByClassName('shw')[0].style.display="none"
      }
      document.getElementsByClassName('submitShow')[0].addEventListener('click',closeModal);
      

   
     return () => {
       document.getElementsByClassName('submitShow')[0].removeEventListener('click',closeModal);
     }
   }, [ ])
   useEffect(() => {
    const closeModal=(event)=>{
     document.getElementsByClassName('edt')[0].style.display="none"
    }
    document.getElementsByClassName('submitEdit')[0].addEventListener('click',closeModal);
    

 
   return () => {
     document.getElementsByClassName('submitEdit')[0].removeEventListener('click',closeModal);
   }
 }, [ ])
    

  return (
    <>
    <Modal className='cr'> <ModalForm className='submit'/> </Modal>
    <Modal className='shw'><ModalForm className='submitShow'/></Modal>
    <Modal className='edt'><ModalForm className='submitEdit'/></Modal>
  
    <div className={classes.tools_box}>
      
        <button className={classes.button_icon} style={{backgroundColor:'blue'}} onClick={()=>{openModal('cr')}}>
            <span>ایجاد</span>
            <span className={classes.span_icon}>
                <Add/>
            </span>
        </button>

        <button className={classes.button_icon} style={{backgroundColor:'green'}} onClick={()=>{openModal('edt')}}>
          <span >ویرایش</span>
          <span className={classes.span_icon}>
            <EditIcon/>
          </span>

        </button>

        <button className={classes.button_icon} style={{backgroundColor:'blue'}} onClick={()=>{openModal('shw')}}>
          <span>مشاهده </span>
          <span className={classes.span_icon}>
            <EyesIcon/>
          </span>

        </button>

        <button className={classes.button_icon} style={{backgroundColor:'red'}}>
            <span>حذف</span>
            <span className={classes.span_icon}>
                <Close/>
            </span>
        </button>
         
      
    </div>

    </>
  )
}
