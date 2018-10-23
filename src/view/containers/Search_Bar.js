import React from 'react'
import { connect } from 'react-redux'

import { fetchPossibleGeneNames } from '../actions/gene_names'

class Search_Bar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      InputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({ 'InputValue': event.target.value }, () =>
      this.props.fetchPossibleGeneNames(this.state.InputValue)
    )
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('API CAll => Display results')
  }

  componentDidUpdate(){
    console.log('==== Display Gene names', this.props.geneNames)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.InputValue} onChange={this.handleChange}/>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    geneNames: state.gene_names
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPossibleGeneNames:(partialName) => dispatch(fetchPossibleGeneNames(partialName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search_Bar)
