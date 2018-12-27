import React from 'react'
import { TableCell, withStyles, Icon } from '@material-ui/core'
import { PlayArrowOutlined } from '@material-ui/icons'

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
      </TableCell>
    )
  }
}

const styles = theme => ({
  cell: {
    color: 'white',
    fontSize: 20
  },
  icon: {
    color: '#29736A',
  },
  iconActive: {
    color: '#3e5e9c',
    transform: 'rotate(90deg)'
  }
})


// {
//   this.props.gene.other_mappings &&

export default withStyles(styles)(CollapsibleCell)
