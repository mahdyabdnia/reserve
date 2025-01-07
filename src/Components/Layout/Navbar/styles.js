import {makeStyles} from '@mui/styles'


const useStyles=makeStyles({
tool_bar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    direction:'rtl'

},
menu_btn:{
    display:'flex',
    flexDirection:'row',
    cursor:'pointer',
    transition:'transform 0.5s',
    position:'relative'
},
menu_sub:{
    position:'absolute',
    backgroundColor:'white',
    zIndex:'9999',
    top:'4vh',
    boxShadow:'0px 0px 1px 1px rgba(0,0,0,0.3)'
},
info_button:{
    width:'max-content',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'transparent',
    color:'#e6e8e8',
    
    columnGap:'10px',
    padding:'0.5vh 1vw',
    fontWeight:'bold',
    border:'none',
    height:'100%',
    boxSizing:'border-box',
    cursor:'pointer',
    pointerEvents:'painted',
    '& span':{
        '& svg':{
            fontSize:'30px !important'
        }
    },
    '&:hover':{
        backgroundColor:'#11508f !important',
        color:'white'
    }
},
info_box:{
    display:'flex',
    flexDirection:'column',
    textAlign:'right',
    fontSize:'15px',
    fontWeight:'bold',
    rowGap:'5px'
},
icon:{
    fontSize:'30px !important'
},
help_button:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    position:'relative',
    color:'transparent',
    backgroundColor:'transparent',
    border:'none',
    color:'#e6e8e8',
    cursor:'pointer',
    float:'right'

},
help_box:{
display:'flex',
flexDirection:'column',
position:'relative',
border:'none',
cursor:'pointer',
color:'black',
float:'right',
height:'100%'
},
help_menu:{
display:'none',
flexDirection:'column',
backgroundColor:'white',
boxShadow:'0px 0px 1px 2px rgba(10,10,10,0.1)',
boxSizing:'border-box',
padding:'2vh 2vw',
borderRadius:'2.5px',
position:'absolute',
 
right:'0',
top:'calc(150%)',
height:'max-content',
minWidth:'100%',
width:'max-content'

},
right_tools:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
},
help_list:{
    display:'flex',
    flexDirection:'column',
    listStyleType:'none',
    margin:'0px',
    padding:'0px',
    boxSizing:'border-box',
    width:'auto',
    height:'auto'

},
help_list_item:{
    boxSizing:'border-box',
    padding:'1vh 0vw'
}

})

export default useStyles;