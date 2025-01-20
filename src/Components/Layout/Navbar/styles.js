import {makeStyles} from '@mui/styles'


const useStyles=makeStyles({
    app_bar:{
 backgroundColor:'white !important'
    },
tool_bar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    direction:'rtl',
    backgroundColor:'white ',
    boxSizing:'border-box',
    padding:'2vh 0px'

},
left_tools:{
display:'flex',
minWidth:'50%', 
width:'outline',
flexDirection:'row',
alignItems:'center',
columnGap:'5vw'

},
logo:{
width:'fit-content',
display:'flex',
flexDirection:'row',
'& img':{
    width:'50%',

}

},
search_bar:{
display:'flex',
flexDirection:'row',
borderRadius:'5px',
boxShadow:'0px 0px 1px 2px rgba(0,0,0,0.3)',
boxSizing:'border-box',
padding:'5px 10px',
transition:'width 0.4s ease-in-out'
},
search_icon:{
color:'black'
},
search_input:{
display:'flex',
flexDirection:'row',
alignItems:'center',
border:'none',
borderRadius:'5px',
outline:'none'
},
menu_btn:{
    display:'flex',
    flexDirection:'row',
    cursor:'pointer',
    transition:'transform 0.5s',
    position:'relative',
    color:'black'
},
history_tool_btn:{
display:'flex',
flexDirection:'row',
alignItems:'center',
color:'black',
'& span':{
    '&:first-child':{
        '& svg':{
            
        }
    }
}
 
},
icon_user:{
fontSize:'3vw !important'
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
    fontWeight:'thick',
    rowGap:'1px',
    '& div':{
        '&:first-child':{
        color:'black'
        },
        '&:last-child':{
           color:'rgba(0,0,0,0.5)'
        }
    }
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
    columnGap:'2vw'
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
},
shopCart:{
    borderRadius:'5px',
    alignItems:'center',
    display:'flex',
    flexDirection:'row',
    backgroundColor:'transparent',
    position:'relative'
},
badge:{
    position:'absolute',
    display:'flex',
    flexDirection:'row',
    borderRadius:'50%',
    backgroundColor:'red',
    color:'white',
    zIndex:'4',
    top:'0',
    right:'0',
    transform:'translate(50%,-50%)',
    boxSizing:'border-box',
    padding:'5px 10px'
},
loginButton:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:'transparent',
    borderRadius:'5px',
    borderColor:'rgba(0,0,0,0.4)' ,
    alignItems:'center',
    fontSize:'20px',
    fontFamily:'Vazir'
}

})

export default useStyles;