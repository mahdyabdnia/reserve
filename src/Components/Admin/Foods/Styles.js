import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
food_root:{
    display:'flex',
    flexDirection:'column',
    boxSizing:'border-box',
    rowGap:'20px',
    padding:'2vmax 5vw',
    backgroundcolor:'white',

},
title:{
    fontSize:'20px',
    fontWeight:'bolder',
    color:'rgba(0,0,0,0.5)',
    textAlign:'right',
    textShadow:'1px 1px rgba(0,0,0,0.2)'
},
ops_box:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'right',
    columnGap:'20px',
    boxSizing:'border-box',
    color:'white',
    fontWeight:'bolder',
    boxSizing:'border-box'


},
mn_btn:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
borderRadius:'5px',
color:'white',
fontWeight:'bolder',
fontSize:'16px',
boxShadow:'0px 0px 3px 1px rgba(0,0,0,0.3)',
boxSizing:'border_box',
padding:'0.5vmax 1vmax',
transition:'0.5s font-size',
'&:hover':{
    fontSize:'18px'
}

},
add_food:{
    display:'flex',
    backgroundColor:'yellow',
    transition:'1s color 1s background-color',
    '&:hover':{
        color:'yellow',
        backgroundColor:'white'
    }
},
remove_food:{
    display:'flex',
    backgroundColor:'red',
    transition:'1s color 1s background-color',
    '&:hover':{
        color:'red',
        backgroundColor:'white'
    }
},
food_box:{
    display:'flex',
    flexDirection:'column',
    rowGap:'20px',
    boxSizing:'border-box',
    padding:'1vmax 1vmax'
},
food_table:{
    borderCollapse:'separate',
    border:'1px solid rgba(0,0,0,0.4)',
    display:'flex',
    flexDirection:'column',
    borderRadius:'10px'

},
table_header:{
    display:'flex',
    flexDirection:'row',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    fontSize:'16px',
    fontWeight:'bolder',
    color:'rgba(0,0,0,0.5)',
    boxSizing:'border-box',
    padding:'0.5vmax 1vmax',
   

},
table_data:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    boxSizing:'border-box',
    fontSize:'15px',
    fontWeight:'400',
    padding:'0.5vmax 1vmax',
    textAlign:'center',
   textOverflow:'ellipsis',
   wordWrap:'nowrap',
 


},
table_row:{
    display:'grid',
     gridTemplateColumns:'repeat(auto-fit, minmax(50px, 3fr))',
    alignItems:'center',
    boxSizing:'border-box',
    padding:'1vmax 1vmax',
    justifyContent:'space-between',
    border:'1px solid rgba(0,0,0,0.5)'
},
up_button:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
boxSizing:'border-box',
padding:'0.75vmax 1vmax',
marginLeft:'10px'
},
remove_button:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    boxSizing:'border-box',
    padding:'0.75vmax 1vmax',
    marginRight:'10px'
}

})

export default useStyles;