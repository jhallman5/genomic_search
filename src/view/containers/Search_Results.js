import React from 'react'
import { withStyles, Grid } from '@material-ui/core'

import Search_Bar from './Search_Bar'
import Variant_Table from './Variant_Table'

class Search_Results extends React.Component {
  render() {
    return (
      <div>
        <Grid container className={this.props.classes.root}>
          <Grid item className={this.props.classes.div}>
            <img src={"/logo.png"}  className={this.props.classes.image} />
          </Grid>
          <Grid item className={this.props.classes.title}>
            Variant Search
            <Search_Bar />
          </Grid>
        </Grid>
        <Variant_Table />
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    marginBottom: 15
  },
  title: {
    fontSize: 35,
    color: 'green',
  },
  div: {
    height: 150,
    width: 150,
    marginRight: 50,
  },
  image: {
    height: 150,
    width: 150,
    position: 'absolute',
  },
  cell: {
    fontSize: 14
  }
})

export default withStyles(styles)(Search_Results)
