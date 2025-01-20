import { makeStyles } from "@mui/styles";
 

const useStyles=makeStyles({
root:{
    display:'flex',
    flexDirection:'column',
    padding:'10vh calc(40% - 490px + 0px)',
    direction:'rtl',
    boxSizing:'border-box',
    height:'auto',
    width:'100%',
    backgroundColor:'rgba(255,255,255,0.8)',
   

},
ad_box:{
    display:'flex',
    columnGap:'1vw',
    '&:nth-of-type(odd)':{
        flexDirection:'row'
    },
    '&:nth-of-type(even)':{
        flexDirection:'row-reverse'
    }
},
carousel_banner:{
border:'1px solid red',
width:'75%',
height:'min-content'
},
ad_banner:{

    display:'flex',
    flexDirection:'column',
    border:'1px solid red',
    width:'25%',
    rowGap:'1vh',
    height:'min-content' 
},
banner:{
    display:'flex',
    flexDirection:'column',
    borderRadius:'7px',
    backgroundColor:'grey',
    width:'100%',
    minHeight:'40vh'
},
header:{
    display:'inline !important',
    borderBottom:'3px solid red',
    paddingBottom:'2vh',
 
}
})

export default useStyles;