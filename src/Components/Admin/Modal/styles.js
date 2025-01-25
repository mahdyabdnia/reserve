import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
modal_root:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    position:'fixed',
    width:'100%',
    height:'100%',
    inset:' 0 0 0 0',
    backgroundColor:'rgb(0,0,0)',
    backgroundColor:'rgba(0,0,0,0.4)',
    zIndex:'20'
},
modal_content:{
    display:'flex',
    flexDirection:'column',
    justifySelf:'center',
    alignSelf:'center',
    width:'50%',
    minHeight:'60%',
    maxHeight:'80%',
    height:'auto',
    backgroundColor:'white',
    borderRadius:'5px',
    boxSizing:'border-box',
    padding:'1vmax 1vamx',
    position:'relative',

},
close_btn:{
    position:'absolute',
    top:'2vmax',
    left:'2vmax',
    border:'none',
    backgroundColor:'inherit',
    fontSize:'20px',
    '& svg':{
        fontSize:'20px',
        color:'black'
    }
},
modal_box:{
    display:'flex',
    flexDirection:'column',
    padding:'1vh 1vw',
    boxSizing:'border-box',
    height:'auto',
    rowGap:'20px'

    
},
form_control:{
    display:'flex',
    flexDirection:'column',
    rowGap:'10px',
    alignItems:'flex-start',
    justifyContent:'center',
    boxSizing:'border-box',
},
form_label:{
 display:'flex',
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'right',
 fontSize:'15px',
 color:'rgba(0,0,0,0.6)',
 boxSizing:'border-box',
 
},
form_input_box:{
display:'flex',
flexDirection:'row',
alignItems:'center',
borderRadius:'5px',
boxSizing:'border-box',
padding:'1vmax 1vmax',
border:'1px solid rgba(0,0,0,0.4)',
width:'100%'


},
form_input:{
display:'flex',
flexDirection:'row',
alignItems:'center',
border:'none',
outline:'none',
width:'100%',
color:'rgba(0,0,0,0.5)',
'&:focus':{
    border:'none',
    outline:'none'
}
},
form_text:{
    display:'flex',
    flexDirection:'row',
    borderRadius:'5px',
    border:'1px solid rgba(0,0,0,0.5)',
    color:'black',
    resize:'vertical',
    wordBreak:'break-all',
    lineHeight:'1.5',
    boxSizing:'border-box',
    width:'100%',
    padding:'1vmax 1vmax',
    height:'50px'
},
select_box:{
 display:'flex',
 flexDirection:'column',
 borderRadius:'5px',
 border:'1px solid rgba(0,0,0,0.5)',
 width:'50%',
 position:'relative',
 boxSizing:'border-box',
 padding:'1vmax 1vmax'

},
select:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
boxSizing:'border-box',
padding:'1vmax 1vmax',
fontSize:'15px',
color:'rgba(0,0,0,0.8)'


},
option_box:{
display:'flex',
flexDirection:'column',
postion:'absolute',
boxSizing:'border-box',
padding:'1vmax 1vmax',
border:'1px solid rgba(0,0,0,0.5)',
top:'100%',
height:'auto',
width:'100%',
rowGap:'10px'

},
option:{
 display:'flex',
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'space-between',
 color:'rgba(0,0,0,0.7)',
 fontSize:'15px'
},
form:{
    width:'50%'
}
})

export default useStyles;