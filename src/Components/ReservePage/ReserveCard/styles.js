import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
root:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width:'100%' 

},
week:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    width:'100%',
    alignItems:'center',
    padding:'0.5vh 0vw',
    borderTopRightRadius:'5px',
    borderTopLeftRadius:'5px',
    border:'1px solid rgba(0,0,0,0.3)',
    boxSizing:'border-box'

},
select_drp:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#ffeebd',
    border:'1px solid rgba(0,0,0,0.1)',
    direction:'ltr',
    width:'100% !important',
 boxSizing:'border-box',
   position:'relative',
    padding:'0.25vh 1vw !important',

},
select_loc:{
display:'flex',
flexDirection:'column',
width: '100%',
boxSizing:'border-box',
position:'relative'
},
select_loc_box:{
display:'none',
flexDirection:'column',
position:'absolute',
zIndex:'200',
backgroundColor:'white',
top:'0',
width:'100%',
border:'1px solid rgba(0,0,0,0.5)',
boxSizing:'border-box'
},
search_loc_box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    border:'1px solid rgba(0,0,0,0.1)',
    boxSizing:'border-box',
    padding:'1vh 0.5vw',
    overflow:'hidden',
    '& input':{
        display:'flex',
        border:'none',
        outline:'none',
        width:'min-content'
    },
    '& svg':{
        color:'rgba(0,0,0,0.4)',
        fontSize: '17px !important'
    }
},
select_option_box:{
    display:'flex',
    flexDirection:"column",
    width:'100%',
    boxSizing:'border-box',
    border:'1px solid rgba(0,0,0,0.1)'
},
position_option:{
    display:'flex',
    flexDirection:'row',
    borderBottom:'1px solid rgba(0,0,0,0.1)',
    padding:'1vh 1vw'

},
reserve_menu:{
    display:'flex',
    flexDirection:'column',
    borderBottomLeftRadius:'5px',
    borderBottomRightRadius:'5px',
    border:'1px solid rgba(0,0,0,0.1)',
    padding:'1vh'
},
price_and_add:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:'0px 0.5vw',
    '& span':{
        fontSize:'15px',
        color:'rgba(0,0,0,0.5)'
    }
},
btn_add:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'5px',
   
    '& svg':{
        fontSize:'15px !important'
    }

},
btn_remove:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#e89e9b',
    border:'1px solid rgba(0,0,0,0.1)',
    borderRadius:'5px',
   
    '& svg':{
        fontSize:'15px !important',
        color:'red'
    }

},
food_img_name_box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    columnGap:'1vw'
},
img_box:{
    width:'4vmax !important',
    height:'4vmax',
    border:'1px solid rgba(0,0,0,0.3)',
    borderRadius:'10px',
    '& img':{
        objectFit: 'contain',
        width:'100%',
        height: '100%',
        opacity: '0.5'
    }
},
img_box_red:{
    width:'4vmax !important',
    height:'4vmax',
    border:'1px solid rgba(0,0,0,0.3)',
    borderRadius:'10px',
    backgroundColor:'#e89e9b',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    '& img':{
        objectFit: 'contain',
        width:'100%',
        height: '100%',
        opacity: '0.5'
    }
},

})

export default useStyles;