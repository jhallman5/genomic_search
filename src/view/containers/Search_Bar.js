import React from 'react'
import { connect } from 'react-redux'
import { FormGroup } from 'react-bootstrap'
import Autosuggest from 'react-autosuggest'

import { fetchPossibleGeneNames } from '../actions/gene_names'

class Search_Bar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      suggestions: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.getSuggestionValue = this.getSuggestionValue.bind(this)
    this.renderSuggestion = this.renderSuggestion.bind(this)
  }

  handleChange(event){
    this.setState({ value : event.target.value })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('API CAll => Display results')
  }

  onSuggestionsFetchRequested({ value }){
    this.props.fetchPossibleGeneNames(value)
      .then(()=> {
        this.setState({ suggestions: this.props.geneNames })
      })
 }

  onSuggestionsClearRequested(){
    this.setState({
      suggestions: []
    })
  }

  getSuggestionValue(suggestion){
    return suggestion
  }

  renderSuggestion(suggestion){
    return (
      <div>
        {suggestion}
      </div>
    )
  }

  componentDidUpdate(){
    console.log('==== props', this.props, 'state', this.state)
  }

  render(){
    const inputProps = {
      placeholder: 'Search for genes',
      value: this.state.value,
      onChange: this.handleChange
    }

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Autosuggest
            suggestions={this.state.suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
          />
        </FormGroup>
      </form>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    geneNames: state.gene_names.geneNames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPossibleGeneNames: (partialName) => dispatch(fetchPossibleGeneNames(partialName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search_Bar)
