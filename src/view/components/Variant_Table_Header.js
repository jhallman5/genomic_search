import React from 'react'
import { Table, TableHead, TableRow, TableCell, withStyles } from '@material-ui/core'

const VariantTableHeader = props => (
  <TableHead>
    <TableRow className={props.classes.row}>
      <TableCell className={props.classes.cell}>Gene</TableCell>
      <TableCell className={props.classes.cell}>Nucleotide Change</TableCell>
      <TableCell className={props.classes.cell}>Protein Change</TableCell>
      <TableCell className={props.classes.cell}>Alias</TableCell>
      <TableCell className={props.classes.cell}>Region</TableCell>
      <TableCell className={props.classes.cell}>Reported Classification</TableCell>
      <TableCell className={props.classes.cell}>Last Evaluated</TableCell>
      <TableCell className={props.classes.cell}>Last Updated</TableCell>
      <TableCell className={props.classes.cell}>More Info</TableCell>
    </TableRow>
  </TableHead>
)

const styles = theme => ({
  row: {
      backgroundColor: '#3e5e9c',
  },
  cell: {
    color: 'white',
    fontSize: 20
  }
})


export default withStyles(styles)(VariantTableHeader)
