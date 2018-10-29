import React from 'react'
import { connect } from 'react-redux'
import { withStyles, Grid } from '@material-ui/core'

import Search_Bar from './Search_Bar'
import LoadingWheel from '../components/Loading_Wheel'
import Variant_Table from './Variant_Table'

class Search_Results extends React.Component {
  constructor(props){
    super(props)
  }

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
        {
          this.props.loading ? <LoadingWheel /> : <Variant_Table />
        }
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
    color: '#29736A',
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

const mapStateToProps = state => {
  return {
    gene_data: state.gene_data.geneData,
    loading: state.gene_data.loading
  }
}

export default withStyles(styles)(connect(mapStateToProps)(Search_Results))
