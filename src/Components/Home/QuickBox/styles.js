import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
root:{
    display:'flex', 
 
    
    flexDirection:'row',
    justifyContent:'space-between', 
    rowGap:'5vh',
    flexWrap:'wrap',
  height:'0px',
  overflow:'hidden',
  transition:'1s height',
    
    position:'relative'
}
})

export default useStyles;