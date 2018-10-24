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
      searchedTerm: '',
      retainedSuggestions: [],
      suggestions: [],
      fetching: false,
      mostRecentRequest: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.getSuggestionValue = this.getSuggestionValue.bind(this)
    this.renderSuggestion = this.renderSuggestion.bind(this)
    this.suggestionFilter = this.suggestionFilter.bind(this)
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this)
  }

  handleChange(event, {newValue}){
    this.setState({ value : newValue })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('API CAll => Display results with ', this.state.value)
  }

  onSuggestionsFetchRequested({ value }){
    if(this.state.fetching) {
      this.setState({ mostRecentRequest: value })
      return
    }
    if(value.length < 2) {
      this.setState({ suggestions: [] })
      return
    }
    if(this.state.searchedTerm == value.substring(0,2)){
      this.suggestionFilter(value)
      return
    }
    this.setState({
      searchedTerm: value.substring(0,2),
      fetching: true
    })
    this.props.fetchPossibleGeneNames(value.substring(0,2))
      .then(()=> {
        this.setState({
          retainedSuggestions: this.props.geneNames,
          suggestions: this.props.geneNames,
          fetching: false
        })
        if(this.state.mostRecentRequest){
          this.onSuggestionsFetchRequested({ value: this.state.mostRecentRequest })
          this.setState({ mostRecentRequest: null })
        }
      })
  }

  suggestionFilter(value){
    const filteredSuggestions = this.state.retainedSuggestions
      .filter(retained => value == retained.substring(0, value.length))
    this.setState({ suggestions: filteredSuggestions })
  }

  onSuggestionsClearRequested(){
    this.setState({ suggestions: [] })
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

  onSuggestionSelected(event){
    this.setState({ value : event.target.textContent })
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
            onSuggestionSelected={this.onSuggestionSelected}
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
