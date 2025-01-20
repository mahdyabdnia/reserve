import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({


    '@global':{
      '& svg':{
        color:'black',
        fontSize: '20px !important'
      }
    },
    modal_root:{
        display:'none',
        flexDirection:'column',
        position:'fixed',
        backgroundColor:'rgb(0,0,0)',
        backgroundColor:'rgba(0,0,0,0.4)',
        width:'100%',
        height:'100%',
        zIndex:'10',
        top:'0',
        bottom:'0',
        right:'0',
        left:'0',
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center',
        boxSizing:'border-box'
         


    },
    modal_content:{
         background:'white',
         boxShadow:'0px 0px 1px 3px rgba(0,0,0,0.3)',
         minWidth:'70%',
         maxWidth:'90%',
         width:'auto',
         minHeight:'50%',
         maxHeight:'70%',
         height:'auto',
         padding:'2vh 1vw',
         borderRadius:'5px',
         position:'relative',
         display:'flex',
         flexDirection:'column',
         boxSizing:'border-box'
    },
    modal_close_btn:{
        position:'absolute',
        top:'0vh ',
        zIndex:'20',
        padding:'1vh 1vw',
        left:'0px',
        borderTopLeftRadius:'5px',
        cursor:'pointer',
        '&:hover':{
            backgroundColor:'red',
            color:'white',
            '& svg':{
                color:'white'
            }
        }
    }
})

export default useStyles;