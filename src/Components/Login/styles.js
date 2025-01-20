import { makeStyles } from "@mui/styles";
 
const useStyles=makeStyles({
    login_root:{
        display:'flex',
        width:'100%',
        height:'100%',
        position:'fixed',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage: `url(${"/images/background.PNG"})`,
        opacity:'0.8'
    },
    login_page:{
        display:'flex',
        flexDirection:'column',
        borderRadius:'5px',
        boxShadow:'0px 0px 0.5px 1px rgba(0,0,0,0.4)',
        width:'auto',
        padding:'2vh 10vw',
        boxSizing:'border-box',
        alignItems:'center',
        justifyContent:'center',backgroundColor:'rgba(255,255,255,0.8)'
    },
    form_box:{
    display:'flex',
    flexDirection:'column',
    rowGap:'1.5vh',
    width:"100%",
    boxSizing:'border-box',
    opacity:'1',
   
    },
    form_control:{
    display:'flex',
    flexDirection:'column',
    boxSizing:'border-box'
    },
    form_label:{
    fontWeight:'bold'
    },
    form_input:{
    boxSizing:'border-box',
    padding:'1vh 2vw',
    width:'100%'
    },
    form_submit:{
     color:'white',
     border:'none',
     background:'blue',
     borderRadius:'5px',
     padding:'1vh 0vw',
     fontWeight:'bold',
     opacity:'0.5'

    },
    form_change_btn:{
     backgroundColor:'transparent',
     border:'none',
     justifySelf:'right',
     cursor:'pointer',
     fontWeight:'bold'
    }
})


export default useStyles;