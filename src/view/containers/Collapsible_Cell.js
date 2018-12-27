import React from 'react'
import { TableCell, withStyles, Icon } from '@material-ui/core'
import { PlayArrowOutlined } from '@material-ui/icons'

import Other_Mapping from '../components/Other_Mapping'

export class CollapsibleCell extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      expanded: false
    }
    this.toggleExpand = this.toggleExpand.bind(this)
  }

 toggleExpand() {
   this.setState({ expanded: !this.state.expanded })
 }

  render(){
    return (
      <TableCell className={this.props.classes.cell}>
          <Icon>
            <PlayArrowOutlined
              className={
                !this.state.expanded
                ? this.props.classes.icon
                : this.props.classes.iconActive
              }
              onClick={this.toggleExpand}
            />
          </Icon>
          {this.props.gene.nucleotide_change}
          {
            this.state.expanded &&
              this.props.gene.other_mappings
                .split(',')
                .map((other_mapping, key) =>
                  <Other_Mapping key={key} info={other_mapping}/>
                )
          }
      </TableCell>
    )
  }
}

const styles = theme => ({
  cell: {
    color: 'black',
    fontSize: 16
  },
  icon: {
    color: '#3e5e9c',
  },
  iconActive: {
    color: '#3e5e9c',
    transform: 'rotate(90deg)'
  }
})

export default withStyles(styles)(CollapsibleCell)
