import React from 'react'
import { connect } from 'react-redux'
import { Table, TableBody, TableRow, TableCell, withStyles } from '@material-ui/core'

import VariantTableHeader from '../components/Variant_Table_Header'
import CollapsibleCell from './Collapsible_Cell'
import { fetchGeneData } from '../actions/gene_data'

class Variant_Table extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Table>
        <VariantTableHeader />
          {
            this.props.geneData &&
              <TableBody>
                {
                  this.props.geneData.map( (gene, index) => {
                    return (
                      <TableRow className={this.props.classes.row} key={index} >
                        <TableCell className={this.props.classes.cell} component="th" scope="row">{gene.gene_name}</TableCell>
                        <CollapsibleCell gene={gene}/>
                        <TableCell className={this.props.classes.cell} >{gene.protein_change}</TableCell>
                        <TableCell className={this.props.classes.cell} >{gene.alias}</TableCell>
                        <TableCell className={this.props.classes.cell} >{gene.region}</TableCell>
                        <TableCell className={this.props.classes.cell} >{gene.reported_classification}</TableCell>
                        <TableCell className={this.props.classes.cell} >{gene.last_evaluated}</TableCell>
                        <TableCell className={this.props.classes.cell} >{gene.last_updated}</TableCell>
                        <TableCell className={this.props.classes.cell} >{gene.url}</TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
          }
      </Table>
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
    fontSize: 18
  }
})

const mapStateToProps = state => {
  return {
    geneData: state.gene_data.geneData,
    loading: state.gene_data.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGeneData: (partialName) => dispatch(fetchGeneData())
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Variant_Table))
