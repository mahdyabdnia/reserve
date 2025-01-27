import React from 'react'
import useStyles from './styles'
import {Outlet} from 'react-router-dom'
export default function Manage({children}) {
    const classes=useStyles();
  return (
    <div className={classes.mng_root}>
        <h1 className={classes.title}>مدیریت تغذیه</h1>
         <Outlet/>
    </div>
  )
}
