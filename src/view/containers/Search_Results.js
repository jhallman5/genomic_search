import React from 'react'
import { withStyles, Grid } from '@material-ui/core'

import Search_Bar from './Search_Bar'
import Varient_Table from './Varient_Table'

// <Grid container className={classes.root} spacing={16}>
//        <Grid item xs={12}>
//          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
//            {[0, 1, 2].map(value => (
//              <Grid key={value} item>
//                <Paper className={classes.paper} />
//              </Grid>

class Search_Results extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={3} spacing={8}>
            <div className={this.props.classes.div}>LOGO</div>
          </Grid>
          <Grid item xs={6} spacing={16}>
            Varient Search
            <Search_Bar />
          </Grid>
        </Grid>
        <Varient_Table />
      </div>
    )
  }
}

const styles = theme => ({
  div: {
    backgroundColor: '#3e5e9c',
    height: 150,
    width: 150,
    color: 'white'
  },
  cell: {
    fontSize: 14
  }
})

export default withStyles(styles)(Search_Results)
