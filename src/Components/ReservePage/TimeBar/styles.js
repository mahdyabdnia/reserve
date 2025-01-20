import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
    '@global':{
        '& span':{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            cursor: "pointer"
            }
    }
    ,
 time_root:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'stretch',
    alignItems:'center',
    border:'1px solid rgba(0,0,0,0.3)' ,
    borderRadius:'5px',
    columnGap:'3vw'
 }
})

export default useStyles;