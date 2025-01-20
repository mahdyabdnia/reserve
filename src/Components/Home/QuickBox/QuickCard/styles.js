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
    boxSizing:'border-box',
    '&:nth-of-type(2n)':{
        flexDirection:'row-reverse'
    }
}
})

export default useStyles;