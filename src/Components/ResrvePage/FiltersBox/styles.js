import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
    root:{
        display:'flex',
        flexDirection:'row',
        border:'1px solid rgba(0,0,0,0.2)',
        borderRadius:'3px',
        padding:'1vh 1vw',
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'rgba(255,255,255,0.6)',
        boxSizing:'border-box'
    } ,
    date_box:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:'4px',
        border:'1px solid rgba(0,0,0,0.3)',
        boxSizing:'border-box',
        padding:'0.25vh 0.25vw',
        backgroundColor:'white',

    },
    date_input:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        border:'none',
        outline:'none',
       
        '&:focus':{
            outline:'none'
        }
        


    },
    arrow:{
        cursor:'pointer',
        fontSize:'20px !important'
    }
})

export default useStyles;