import React from 'react'
import { withStyles } from '@material-ui/core'

const Other_Mapping = props => (
  <div className={props.classes.div}>
    {props.info}
  </div>
)

const styles = theme => ({
  div: {
    color: 'black',
    fontSize: 16
  }
})

export default withStyles(styles)(Other_Mapping)
