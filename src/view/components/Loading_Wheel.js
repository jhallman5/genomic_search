import React from 'react'
import { withStyles, CircularProgress } from '@material-ui/core/'

class LoadingWheel extends React.Component {
  constructor() {
    super()
    this.state = {
      completed: 0,
    }
    this.progress = this.progress.bind(this)
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 15)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  progress(){
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 })
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CircularProgress
          className={classes.progress}
          variant="determinate"
          size={75}
          value={this.state.completed}
        />
      </div>
    );
  }
}

const styles = theme => ({
  progress: {
    color: '#39B7AA',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
    },
})

export default withStyles(styles)(LoadingWheel)
