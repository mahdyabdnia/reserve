import React,{useState} from 'react'
import useStyles from './styles'
import { LeftArrow, RightArrow } from '../../Icons/Icons';
import DatePicker from 'react-persian-calendar-date-picker';
import 'react-persian-calendar-date-picker/lib/DatePicker.css';
import zIndex from '@mui/material/styles/zIndex';
 
export default function TimeBar() {
    const classes=useStyles();
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.time_root}>
        <span><RightArrow/></span>
        <span>تاریخ</span>
        <span><LeftArrow/></span>
      
    </div>
  )
}
