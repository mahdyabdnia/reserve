import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
content_root:{
    display: 'flex',
    flexDirection: 'column',
    boxSizing:'border-box',

},
content_list:{
    display:'flex',
    flexDirection:'column',
    listStyleType: 'none',
    padding: '0px',
    boxSizing:'border-box',
    width:'100%',
    cursor:'pointer'

},
content_list_item:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    width:'100%',
    columnGap:'1vw',
    alignItems:'center',
    padding:'2vh 1vw',
    boxSizing:'border-box',
    cursor:'pointer',
    
    '& span':{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        fontSize:'20px'
    }

},
content_list_item_over:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    width:'100%',
    columnGap:'1vw',
    alignItems:'center',
    color:'white',
    padding:'2vh 1vw',
    backgroundColor:'#4287f5',
    boxSizing:'border-box',
    cursor:'pointer',
    
    '& span':{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        fontSize:'20px'
    }
},
icon:{
    fontSize:'50px !important'
}
})

export default useStyles;