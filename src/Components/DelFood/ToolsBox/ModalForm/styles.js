import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
    '@global':{
     '& label':{
        marginLeft: '10px',
        fontSize: '0.90vw',
        width: '15%'
     },
     '& span':{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
     }
    },
  form_root:{
    display:'flex',
    flexDirection:'column',
    marginTop:'3vh',
    boxSizing:'border-box'
    
  },
  form:{
    display:'flex',
    flexDirection:'column',
    padding:'1vh 2vw',
    rowGap:'20px !important',
    boxSizing:'border-box'
  },
 
   form_box:{
    display:'grid',
    gridTemplateColumns:'50% 50%',
    boxSizing:'border-box',
    columnGap:'20px'
    

  },
  form_control:{
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
   boxSizing:'border-box'
   
  },
  form_input:{
    width:'85%',
   
    borderRadius:'4px',
    border:'1px solid rgba(0,0,0,0.3)',
    boxSizing:'border-box',
    padding:'0vh 0.5vw',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    position:'relative'
    
  },
  form_inputTwo:{
    width:'85%',
     
    borderRadius:'4px',
    border:'1px solid rgba(0,0,0,0.3)',
    boxSizing:'border-box',
    padding:'0vh 0.5vw',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
    
  },
  form_id_number:{
    backgroundColor:'rgba(0,0,0,0.1)',
    border:'none',
     
    padding:'0.5vh 0.5vw',
    outline:'none',
    '&:focus':{
        outline:'none'
    }
  },
  form_person_info:{
   border:'none',
   outline:'none',
   padding:'0.5vh 0.5vw',
   paddingRight:'10px',
   '&:focus':{
    outline:'none'
   }
  },
  date_input:{
    width:'max-content',
    border:'none',
    outline:'none',
    padding:'0.5vh 0.5vw',
    position:'relative',
    '&:focus':{
        outline:'none'
    }
  },
  form_select_box:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    cursor:'pointer'

  },
  form_submit:{
    display:'flex',
    flexDirection:'row',
    color:'white',
    fontWeight:'bolder',
    border:'none',
    borderRadius:'5px',
    backgroundColor:'#1c9492',
    boxSizing:'border-box',
    padding:'1vh 1vw'

  },
  select_box:{
    display:'none',
    flexDirection:'column',
    position:'absolute',
    border:'1px solid rgba(0,0,0,0.3)',
    borderRadius:'5px',
    top:'100%',
    width:'100%',
    left:'0',
    right:'0',
    zIndex:'200',
    padding:'0.5vh 0.5vw ',
    boxSizing:'border-box',
    boxShadow:'0px 0px 1px 1px rgba(0,0,0,0.2)',
    cursor:'pointer'
  },
  select_menu_item:{
    cursor:'pointer',
    '&:hover':{
      backgroundColor:'blue',
      color:'white'
    }
  }
 
})

export default useStyles;