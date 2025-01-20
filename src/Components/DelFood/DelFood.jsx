import React from 'react'
import useStyles from './styles'
import ToolsBox from './ToolsBox/ToolsBox';
import DocsTable from './DocsTable/DocsTable';
export default function DelFood() {
    const classes=useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.filter_box}></div>
        <ToolsBox/>
       <DocsTable/>
      
    </div>
  )
}
