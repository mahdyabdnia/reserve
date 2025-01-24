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
}
})

export default useStyles;