import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
card:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    rowGap:'5px'

},
card_date:{
    display:'flex',
    flexDirection:'column',
    borderRadius:'5px 5px 0 0 ',
    backgroundColor:'rgba(10,200,40,0.1)',
    width:'100%',
    boxSizing:'border-box',
    padding:'1vh  2.5vw',
    alignItems:'center',
    fontWeight:'bolder',
    width:'100%'
    
},
card_info_box:{
    display:'flex',
    flexDirection:'column',
    width:'100%'
    
},
site_box:{
    display:'flex',
    flexDirection:'row',
    boxSizing:'border-box',
   width:'100%',
   padding:'1vh 0.5vw',
   alignItems:'center',
   justifyContent:'space-between',
   backgroundColor:'yellowgreen',
   borderRadius:'5px 5px 0 0 '

},
select_box:{
    display:'flex',
    flexDirection:'column',
    width:'100%',
    borderTop:'none !important',
    border:'1px solid rgba(0,0,0,0.3)',
    boxSizing:'border-box',
    padding:'1vh 0.5vw'
}

})

export default useStyles;