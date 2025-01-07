import React from 'react'
import useStyles from './styles'

import ReserveBox from './ReserveBox/ReserveBox';
import FiltersBox from './FiltersBox/FiltersBox';
import SetBox from './SetBox/SetBox';

export default function ReservePage() {
    const classes=useStyles();
  return (
    <div className={classes.root}>
      <FiltersBox/> 
      <SetBox/>
      <ReserveBox/>
    </div>
  )
}
