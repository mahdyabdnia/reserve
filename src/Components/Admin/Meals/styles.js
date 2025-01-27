import { makeStyles } from "@mui/styles"

const useStyles=makeStyles({
    meals_root:{
        display:'flex',
        flexDirection:'column',
        boxSizing:'border-box',
        rowGap:'20px',
        padding:'2vmax 5vw',
        backgroundcolor:'white',},


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
        btn:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:'5px',
            fontSize:'15px',
            color:'white',
            boxSizing:'border-box',
            padding:'0.5vmax 1vmax',
            fontWeight:'bolder',
            border:'1px solid rgba(0,0,0,0.6)'
            

        },
        meals_table_box:{
            display:'flex',
            flexDirection:'column',
            width:'100%',
            boxSizing:'border-box',
            padding:'1vh 1vw'
        },
        meals_table:{
            borderCollapse:'collapse',
            width:'100%',
            marginTop:'20px'
        },
        table_head:{
         backgroundColor:'#4CAF50',
         color:'white'
        },
        table_row:{
         borderBottom:'1px solid rgba(0,0,0,0.6)',
         display:'flex',
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between'
         
        },
        table_body:{
         backgroundcolor:'#fff',
         color:'black',
         
        },
        table_header_data:{
         display:'flex',
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'center',
         boxSizing:'border-box',
         width:'100%',
         padding:'0.5vmax 1vmax'
          
        },
        table_body_data:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            boxSizing:'border-box',
            width:'100%',
            padding:'0.5vmax 1vmax'
          
        }
})


export default useStyles;