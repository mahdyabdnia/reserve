import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
    "@global": {
        body: {
        // Add your desired overflow property here,

        },
      },
    modal_root:{
        display:'none',
        flexDirection:'row',
        position:'fixed',
        top:'0',
        left:'0',
        bottom:'0',
        right:'0',
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center',
        zIndex:'20000000'
    },
    modal_content:{
        display:'flex',
        flexDirection:'column',
        position:'relative',
        backgroundColor:'white',
        borderRadius:'5px',
        boxShadow:'0px 0px 1px 3px rgba(0,0,0,0.4)',
        minWidth:'30%',
        minHeight:'50%',
        height:'auto',
        rowGap:'20px',
        maxHeight:'80%',
        padding:'2vh 2vw',
      width:'auto',
        boxSizing:'border-box'
    },
    tool_bar:{
        display:'flex',
        position:'relative',
        justifyContent:'space-between',
        zIndex:'1',
        top:'0px',
        width:'100%',
        height:'2vh',
        direction:'ltr',
        textAlign:'right',
        padding:'1vh 0.5vw 1vh 0.1vw',
        boxSizing:'border-box',
        '& span':{
            direction:'rtl',
            
            textAlign:'right',
            fontWeight: 'bolder'
        }

    },
    tool_button:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'max-content',
        height:'max-content',
        border:'none',
        backgroundColor:'transparent',
        cursor:'pointer'
    },
    modal_main:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:'3vh 0vw 0vh 0vw'


    },
    input_control:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        columnGap:'1vw',
        marginTop:'1vh 0',
        width:'100%',
        justifyContent:'center',
        maxWidth:'100%',
        padding:'0vh 1vw',
        '& label':{
            fontSize:'14px'
        }

    },
    modal_input:{
        display:'flex',
        flexDirection:'row',
        borderRadius:'5px',
        padding:'1vh 1vw',
        border:'1px solid rgba(0,0,0,0.2)',
        outline:'none',
        width:'50%',
        border:'none',
        outline:'none',
        '&:focus':{
            outline:'none'
        }
      
        

    },
    modal_select_box:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'2vh',
        columnGap:'1vw'
    },
    modal_select_button:{
        backgroundColor:'white',
        padding:'0.5vh 0.5vw',
        borderRadius:'5px',
        border:'1px solid rgba(0,0,0,0.5)',
        cursor:'pointer'
    },
    portal_select_box:{
        textAlign:'right',
        marginBottm:'30px'
    },
    portal_login_button:{
        display:'flex',
        flexDirection:'row',
        borderRadius:'5px',
        border:'1px solid rgba(0,0,0,0.3)',
        padding:'1vh 1vw',
        alignItems:'center',
        justifyContent:'center',
        background:'#198c7f',
        color:'white',
        fontWeight:'bolder',
        cursor:'pointer'
    },
    input_box:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:'5px',
        border:'1px solid rgba(0,0,0,0.3)',
        boxSizing:'border-box',
        padding:'0.5vh 1vw'

    },
    portal_select:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        columnGap:'20px',
        marginBottom:'20px',
        

    },
    portal:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    portal_img:{
        width:'60px',
        aspectRatio:'1/1',
        objectFit:'contain',

    }

})


export default useStyles;