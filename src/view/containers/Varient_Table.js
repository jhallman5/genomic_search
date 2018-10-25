import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

import { fetchGeneData } from '../actions/gene_data'

class Varient_Table extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Gene</TableCell>
              <TableCell>Nucleotide Change</TableCell>
              <TableCell>Protein Change</TableCell>
              <TableCell>Alias</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Reported Classification</TableCell>
              <TableCell>Last Evaluated</TableCell>
              <TableCell>Last Updated</TableCell>
              <TableCell>More Info</TableCell>
            </TableRow>
          </TableHead>
          {
            (this.props.geneData) &&
              <TableBody>
                {
                  this.props.geneData.map( (gene, index) => {
                    return (
                      <TableRow key={index} >
                        <TableCell component="th" scope="row">{gene[0]}</TableCell>
                        <TableCell >{gene[1]}</TableCell>
                        <TableCell >{gene[2]}</TableCell>
                        <TableCell >{gene[4]}</TableCell>
                        <TableCell >{gene[6]}</TableCell>
                        <TableCell >{gene[7]}</TableCell>
                        <TableCell >{gene[10]}</TableCell>
                        <TableCell >{gene[11]}</TableCell>
                        <TableCell >{gene[12]}</TableCell>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Varient_Table))
