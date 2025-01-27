import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
    mng_root:{
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
})

export default useStyles;