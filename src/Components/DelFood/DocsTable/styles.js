import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
doc_root:{
    display:'flex',
    flexDirection:'column',
    rowGap:'2vh',
    padding:'1vh 2vw'
},
doc_table:{
    borderCollapse:'collapse',
    border:'1px solid rgba(0,0,0,0.3)',
    borderRadius:'6px',
    '& thead':{
        backgroundColor:'#1e7c94',
        color:'white',
        padding:'1vh 0vw'
    },
    '& th':{
        border:'1px solid rgba(255,255,255,0.9)',
        borderCollapse:'collapse'
    },
    '& td':{
        border:'1px solid rgba(0,0,0,0.3)',
        borderCollapse:'collapse',
        textAlign: 'center',
        
    },
    '& tr':{
        '&:nth-of-type(even)':{
            backgroundColor:'rgba(0,0,0,0.3)'
        }
    }
}
})


export default useStyles;