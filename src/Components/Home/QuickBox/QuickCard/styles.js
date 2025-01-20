import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
card:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    rowGap:'1vh',
    width:'50%',
    padding:'1vh 1vw',
    borderRadius:'5px',
    boxSizing:'border-box',
     
 
  
    alignSelf:'center',
    '&:last-child':{
        justifySelf:'center',
        flexGrow: '2'
    }
}
})

export default useStyles;