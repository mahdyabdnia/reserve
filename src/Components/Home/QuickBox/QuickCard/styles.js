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
    top:'100px',
    '&:nth-of-type(2n+1)':{
        flexDirection:'row-reverse',
        position:'relative',
        top:'120px'
    },
    
    '&:last-child':{
        position:'relative',
        top:'200px'
    },
    '&:hover':{
     top:'-10px'
    }
}
})

export default useStyles;