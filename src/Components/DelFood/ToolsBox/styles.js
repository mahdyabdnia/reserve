import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({

    '@global':{
    '& svg':{
        color:'white',
        fontSize: '10px !important',
        fontWeight:'bolder'
    }
    },
    tools_box:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'right',
        columnGap:'1vw',
        padding:'1vh 2vw'
    },
    button_icon:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        columnGap:'1vw',
        borderRadius:'10px',
        border:'none',
        color:'white',
        padding:'0.5vh 1vw',
        fontWeight:'bolder'


    },
    span_icon:{
        display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:'0.25vh 0.25vw',
   
    color:'white',
    borderRadius:'4px',
    '& svg':{
        color:'white',
        fontSize:'20px !important',
        fontWeight:'bolder !important'
    }

}
})

export default useStyles;

