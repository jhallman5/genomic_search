import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Table, TableHead, TableBody, TableRow, TableCell, withStyles } from '@material-ui/core'

import VarientTableHeader from '../components/Varient_Table_Header'
import { fetchGeneData } from '../actions/gene_data'

class Varient_Table extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <Table >
          <VarientTableHeader />
          {
            (this.props.geneData) &&
              <TableBody>
                {
                  this.props.geneData.map( (gene, index) => {
                    return (
                      <TableRow className={this.props.classes.row} key={index} >
                        <TableCell className={this.props.classes.cell} component="th" scope="row">{gene[0]}</TableCell>
                        <TableCell className={this.props.classes.cell} >{gene[1]}</TableCell>
                        <TableCell className={this.props.classes.cell} >{gene[2]}</TableCell>
                        <TableCell className={this.props.classes.cell} >{gene[4]}</TableCell>
                        <TableCell className={this.props.classes.cell} >{gene[6]}</TableCell>
                        <TableCell className={this.props.classes.cell} >{gene[7]}</TableCell>
                        <TableCell className={this.props.classes.cell} >{gene[10]}</TableCell>
                        <TableCell className={this.props.classes.cell} >{gene[11]}</TableCell>
                        <TableCell className={this.props.classes.cell} >{gene[12]}</TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
          }
        </Table>
      </div>
    )
  }
}

const styles = theme => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#F0F0F0',
    }
  },
  cell: {
    fontSize: 14
  }
})

const mapStateToProps = state => {
  return {
    geneData: state.gene_data.geneData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGeneData: (partialName) => dispatch(fetchGeneData())
    }
}

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Varient_Table))
)
