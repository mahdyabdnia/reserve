import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
root:{
    display:'flex',
flexDirection: 'column',
backgroundColor: 'rgba(255,255,255,0.8)',
minHeight:'calc(100vh - 48px)',
height:'auto',
direction:'rtl',
padding:'2vh 1vw',
rowGap:'10px'
}
})

export default useStyles;