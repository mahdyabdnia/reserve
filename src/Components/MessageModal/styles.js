import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
 modal:{
    display:'none',
    position:'fixed',
    width:'100%',
    height:'100%',
    inset:' 0 0 0 0',
    backgroundColor:'rgb(0,0,0)',
    backgroundColor:'rgba(0,0,0,0.8)',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    boxSizing:'border-box'


 },
 modal_content:{
    display:'flex',
    flexDirection:'column',
    position:'relative',
    backgroundColor:'white',
    borderRadius:'5px',
    boxSizing:'border-box',
    border:'1px solid rgba(0,0,0,0.4)',
    padding:'2vmax 2vmax',
    justifyContent:'space-between',
    width:'60%',
    height:'20%',
   
 },
 close_btn:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    border:'none',
    backgroundColor:'inherit',
    position:'absolute',
    top:'5% ',
    left:'20px'

 },
 modal_message:{
    textAlign:'right',
    fontSize:'15px',
    fontWeight:'bolder',
    color:'rgba(0,0,0,0.75)',

 },
 modal_btn_box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    boxSizing:'border-box',
    padding:'0 3vmax',
    overflow:'hidden',
    columnGap:'5vmax'

    
 },
 btn_save:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'5px ',
    fontSize:'15px',
    fontWeight:'bolder',
    color:'white',
    boxSizing:'border-box',
    padding:'0.5vmax 2vmax',
    backgroundColor:'green',
 },
 btn_cancel:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'5px ',
    fontSize:'13px',
    fontWeight:'bolder',
    color:'white',
    boxSizing:'border-box',
    padding:'0.5vmax 2vmax',
    backgroundColor:'red',
 },



})



export default useStyles;