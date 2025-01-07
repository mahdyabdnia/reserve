import { makeStyles } from "@mui/styles";
 

const useStyles=makeStyles({
root:{
    display:'flex',
    flexDirection:'column',
    padding:'10vh calc(50% - 490px + 0px)',
    direction:'rtl',
    boxSizing:'border-box',
    height:'auto',
    width:'100%',
    backgroundColor:'rgba(255,255,255,0.8)',
    minHeight:'calc(100vh - 48px)'

},
notif_box:{
    display:'flex',
    flexDirection:'column',
    float:'right',
    width:'50%',
    justifySelf:'right',
    boxShadow:'0px 0px 1px 2px rgba(0,0,0,0.3)',
    borderRadius:'3px',
    boxSizing:'border-box' ,
    padding:'1vh 2vw 0vh 2vw',
    backgroundColor:'rgba(1,145,124,0.6)'
    
},
hr:{
    opacity:'1',
    backgroundColor:'rgba(0,0,0,0.5) !important'
},
h3:{
    display:'flex',

    margin:'calc(2%) 0px !important',
    alignItems:'center',
    justifyContent:'space-between',
    '& h3':{
        margin:'0'
    },
    '& svg':{
        alignSelf:'center',
        transform: 'rotate(180deg)',
    }
},
notif_list:{
    display:'flex',
    flexDirection:'column',
    textAlign:'right',
    padding:'0px',
    margin:'1vh 0px',
    listStyleType:'circle !important',
    boxSizing:'border-box',
    maxHeight:'0',
    overflow:'hidden',
    transition:'0.5s'

},
notif_list_item:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    margin:'0px',
    boxSizing:'border-box',
    fontWeight:'bold',
    padding:'0.5vh 0px '

}
})

export default useStyles;