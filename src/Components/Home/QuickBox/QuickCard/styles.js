import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
card_img:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    aspectRatio:'1/1',
    width:'100px',
    objectFit:'contain'
},
card:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:'1vh 1vw',
 
   
    transition:'top 2s',
    position:'relative',
    boxSizing:'border-box', 
    transition:'1s transform',
    
    
    '&:hover':{
     transform:' rotate(360deg)'
    }
}
})

export default useStyles;