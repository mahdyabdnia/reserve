import React from 'react'
import useStyles from './styles'
import classnames from 'classnames'
export default function SecondDrawer({className}) {
    const classes=useStyles()
  return (
    <div className={classnames(classes.second_root,className)}>
       
    </div>
  )
}
