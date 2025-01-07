import { SportsRugbySharp } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

  const useStyles=makeStyles({
   box_root:{
    display:'flex',
    flexDirection:'column',
   
    boxSizing:'border-box',
   
    borderRadius:'3px',
    backgroundColor:'transparent',
   },
   tab_box:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    boxSizing:'border-box',
    padding:'1.25vh 2vw 0px 2vw',
    borderRadius:'5px',
    backgroundColor:'rgba(0,0,0,0.1)',
    justifyContent:'space-between',
   },
   tab_list:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'right',
    listStyleType:'none',
    margin:'0px',
    padding:'0px',
    boxSizing:'border-box',
    columnGap:'0.5vw'
   },
   tab_item:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'grey',
    boxSizing:'border-box',
    padding:'1vh 2vw',
    borderRadius:'5px 5px 0px 0px',
    color:'white',
    cursor:'pointer'
   },
   tab_active:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
    boxSizing:'border-box',
    padding:'1vh 2vw',
    borderRadius:'5px 5px 0 0 ',
    color:'white',
    cursor:'pointer'
   },
   food_box:{
    display:'grid',
    gridTemplateColumns:'auto auto auto auto auto auto auto',
    
    borderRadius:'4px',
    backgroundColor:'transparent',
    alignItems:'center',
    marginTop:'10px',
    backgroundColor:'rgba(255,255,255,0.4)',
    columnGap:'10px',

    

   }

})

export default useStyles;