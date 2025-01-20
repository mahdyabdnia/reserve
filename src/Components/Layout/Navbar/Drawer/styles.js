import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
    drawer_background:{
        position:'fixed',
        display:'none',
        width:'100%',
        height:'100%',
        zIndex:'200',
        top:'0',
        bottom:'0',
        left:'0',
        right:'0',
        backgroundColor:'rgba(0,0,0,0.5)',
        transition:'display 4s'
    },
    drawer_root:{
        display:'flex',
        top:'0',
        bottom:'0',
        flexDirection:'column',
        backgroundColor:'white',
        height:'100%',
        width:'0%',
        position:'fixed',
        boxSizing:'border-box',
        padding:'1vh 0vw',
        left:'0',
      transition:'1s'
        
        


    },
    drawer_header_box:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:'1vh 1vw',
       
        boxSizing:'border-box'


    }
})


export default useStyles;