import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
root:{
    display:'flex',
    flexDirection:'column',
    boxSizing:'border-box',
    position:'relative',
    
},
tabs_time:{
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'flex-start',
    columnGap:'10px',
    backgroundColor:'rgba(0,0,0,0.05)',
    padding:'1vh 1vw 0vh 1vw',
    boxShadow:'0px 0px 6px 0.5px rgba(0,0,0,0.2)'

},
tab_time:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    color:'white',
    backgroundColor:'#467570',
    padding:'1vh 1vw 0vh 1vw',
    borderTopLeftRadius:'5px',
    borderTopRightRadius:'5px',
    cursor:'pointer',
    '&:hover':{
        backgroundColor:'green',
        transform:'translateY(2px)'
    }
},
tab_time_active:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    color:'white',
    backgroundColor:'white',
    padding:'1vh 1vw 0vh 1vw',
    borderTopLeftRadius:'5px',
    borderTopRightRadius:'5px',
    color:'black',
    cursor:'pointer',
    '&:hover':{
        backgroundColor:'white',
        transform:'translateY(2px)'
    }
},
resv_box:{
    display:'grid',
    gridTemplateColumns:'repeat(7,minmax(auto, 1fr))',
    marginTop:'1vh',
    columnGap:'10px',
    maxWidth:'100%',
    boxSizing:'border-box',
    padding:'0px 1vw',

    '@media(max-width:480px)':{
       '@media(min-width:240px)':{
        display:'flex !important',
        flexDirection:'column !important',
        rowGap:'20px',
        padding:'1vh 2vw'
       }
    }
    
},
status_tool_bar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    columnGap:'1vw',
    margin:'2vh 1vw'
},
status_btn:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:'1vh 1vw',
    borderRadius:'6px',
    color:'white',
    backgroundColor:'#1179ad',
    fontWeight:'bolder',
    cursor:'pointer',
},
time_filter_bar:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'right',
    borderRadius:'5px',
    border:'1px solid rgba(0,0,0,0.2)',
    boxSizing:'border-box',
    padding:'2vh 3vw',
    margin:'2vh 1vw'
}
})

export default useStyles;