import React from 'react'
import { connect } from 'react-redux'
import { FormGroup, InputGroup, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';

import { fetchPossibleGeneNames } from '../actions/gene_names'

class Search_Bar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      suggestions: [],
      languages: [
        {
          name: 'C',
          year: 1972
        },
        {
          name: 'CCC',
          year: 2012
        }
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
    this.getSuggestions = this.getSuggestions.bind(this)
    this.getSuggestionValue = this.getSuggestionValue.bind(this)
    this.renderSuggestion = this.renderSuggestion.bind(this)
  }

  handleChange(event){
    this.setState({ value : event.target.value }, () =>
      this.props.fetchPossibleGeneNames(this.state.value)
    )
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.state.languages.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  getSuggestionValue(suggestion){ suggestion.name }

  renderSuggestion (suggestion ) {
  return (
    <div>
      {suggestion.name}
    </div>
  )
}

  handleSubmit(event){
    event.preventDefault()
    console.log('API CAll => Display results')
  }

  onSuggestionsFetchRequested ({ value }) {
   this.setState({
     suggestions: this.getSuggestions(value)
   });
 };

  onSuggestionsClearRequested(){
    this.setState({
      suggestions: []
    });
  };

  // componentDidUpdate(){
  //   console.log('==== Display Gene names', this.props.geneNames)
  // }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search for genes',
      value: this.state.value,
      onChange: this.handleChange
    };

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Autosuggest
            suggestions={suggestions}
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
    geneNames: state.gene_names
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPossibleGeneNames:(partialName) => dispatch(fetchPossibleGeneNames(partialName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search_Bar)
