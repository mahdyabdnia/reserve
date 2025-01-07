import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
    box_root:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        margin:'0.25vh 0',
        justifyContent:'right',


    },
    btn:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        color:'white',
        border:'none',
        borderRadius:'5px',
        fontSize:'17px',
        boxSizing:'border-box',
        padding:'0.75vh 1vw',
        cursor:'pointer',
        '&:nth-of-type(1)':{
            backgroundColor:'green',
            marginLeft: '1vw'
        },
        '&:nth-of-type(2)':{
            backgroundColor:'blueviolet'
        }
    }
})


export default useStyles;