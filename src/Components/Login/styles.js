import { makeStyles } from "@mui/styles";
 const path="images/background.jpg"
const useStyles=makeStyles({
    
login_root:{
    display:'flex',
    flexDirection:'column',
    position:'fixed',
    width:'100%',
    height:'100%',
    top:'0',
    left:'0',
    right:'0',
    bottom:'0',
    backgroundImage:`url(${"/images/background.jpg"})`,
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    '@media(max-width:540px)':{
        backgroundSize:'contain ',
        backgroundRepeat:'round',
        
    }
},

login_main:{
    display:'flex',
    flexDirection:'column',
    margin:'auto',
    borderRadius:'5px',
     
    backgroundColor:'rgba(255, 255, 255, 0.8)',
    boxShadow:'0px 0px 1px 2px rgba(0,0,0,.4)',
    height:'40%',
    width:'50%',
    boxSizing:'border-box',
    padding:'2vh 2vw',
    '@media(max-width:540px)':{
        width:'90%'
    }

},
login_form:{
display:'flex',
flexDirection:'column',
alignItems:'center',
rowGap:'20px',
height:'100%',
justifyContent:'center'
},
login_input:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:'transparent',
    border:'none',
    outline:'none',
    textAlign:'left',
    width:'80%'
},
login_control:{
    display:'flex',
    flexDirection:'row',
alignItems:'center',
borderRadius:'5px',
border:'2px solid rgba(255,255,255)',
backgroundColor: 'rgba(255,255,255,0.9)',
width:'50%',
boxSizing:'border-box',
padding:'0.5vh 1vw'

},
login_label:{
    width:'20%',
    minWidth:'max-content',
    fontWeight:'bolder'
},
login_submit:{
    backgroundColor:'rgba(0,0,0,0.8)',
    color:'white',
    borderRadius:'5px',
    border:'1px solid transparent',
    width:'100%',
    boxSizing:'border-box',
    padding:'1vh 2vw',
    fontWeight:'bolder',
    width:'50%'
}
})

export default useStyles;