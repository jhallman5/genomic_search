import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

import { fetchGeneData } from '../actions/gene_data'

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class Varient_Table extends React.Component {
  constructor(props){
    super(props)
    this.state = { render: 0 }
    this.rerender = this.rerender.bind(this)
  }

  componentDidMount(){
    console.log('LOADED!: ', this.props)
    this.props.fetchGeneData()
  }

  componentDidUpdate(){
    console.log('Updated: ')
    if(this.props.geneData){
      console.log(this.props.geneData[0])
    }
  }

  rerender(){
    this.setState({ render: this.state.render + 1})
  }
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell><Button variant="outlined" onClick={this.rerender}>
               Default
             </Button>
            Gene</TableCell>
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
              <TableBody> {
                this.props.geneData.map( (gene, index) => {
                  return (
                    <TableRow key={index} >
                    <TableCell component="th" scope="row">
                    {gene[0]}
                  </TableCell>
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
