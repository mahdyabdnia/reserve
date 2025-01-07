import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
    drawer_root:{
        display:'flex',
        position:'fixed',
        flexDirection:'column',
       
        width:'0%',
        height:'100%',
        overflow:'hidden',
        top:'0',
        bottom:'0',
        zIndex:'1',
        backgroundColor:'white',
        boxSizing:'border-box',
        border:'1px solid black',
         
       
        
        transition:' 1s',
        '@media(max-width:540px)':{
            
        }
        
    },


   drawer_content:{
    display:'flex',
    position:'relative',
    width:'100%',
    height:'100%',
    flexDirection:'column',
    boxSizing:'border-box',
    overflow:'hidden',
    padding:'4vh 5px 5px 5px'
   }
    ,
    
    close:{
        position:'relative',
        width:'100%',
        direction:'ltr',
        display:'flex',
        flexDirection:'row',
        justifyContent:'left',
        top:'-3vh'
        
    },
    closeLeft:{
        position:'relative',
        width:'100%',
        direction:'rtl',
        display:'flex',
        flexDirection:'row',
        justifyContent:'right',
        top:'-3vh'
    },
    drawer_list:{
    display:'flex',
    flexDirection:'column',
    listStyleType:'none',
    padding:'0px',
    margin:'0px',
    boxSizing:'border-box'
    
    },
    drawer_list_item:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        boxSizing:'border-box',
        padding:'1vh 0.5vw',
        fontSize:'20px',
        '&:svg':{
            fontSize:'24px !important'
        }
    },
    drawer_left_list_item:{
        display: 'flex',
        flexDirection:'row-reverse',
        alignItems:'center',
        columnGap:'10px'

    },
    leftSideTools:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    }
})


export default useStyles;