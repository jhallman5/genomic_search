import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Autosuggest from 'react-autosuggest'
import { FormGroup, withStyles, Paper  } from '@material-ui/core'


import { fetchPossibleGeneNames } from '../actions/gene_names'
import { fetchGeneData } from '../actions/gene_data'

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
    if(this.props.location.pathname == '/search-results'){
      this.props.fetchGeneData(this.state.value)
    }
    this.props.history.push('/search-results')
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
    const { classes } = this.props;

    const inputProps = {
      classes,
      placeholder: 'Search for genes',
      value: this.state.value,
      onChange: this.handleChange,
      className: this.props.classes.container
    }
    return (
      <form  onSubmit={this.handleSubmit}>
        <FormGroup>
          <Autosuggest
            suggestions={this.state.suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            renderSuggestionsContainer={
                (options) => (<Paper {...options.containerProps}>
                    {options.children}
                  </Paper>
                )}
            onSuggestionSelected={this.onSuggestionSelected}
            inputProps={inputProps}
            theme={{
                  container: classes.container,
                  suggestionsContainerOpen: classes.suggestionsContainerOpen,
                  suggestionsList: classes.suggestionsList,
                  suggestion: classes.suggestion,
                }}
          />
        </FormGroup>
      </form>
    )
  }
}

const styles = theme => ({
  container: {
    fontSize: 25,
    position: 'relative',
    height: 30,
    width: 400
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    color: 'black',
    zIndex: 1,
    marginTop: 5,
    left: 0,
    right: 0,
  },
  suggestion: {
    margin: 10,
    display: 'block',
    fontSize: 20,
    borderBottom: '2px solid #F0F0F0',
    '&:hover': {
      backgroundColor: '#e5e5e5'
    },
  },
  suggestionsList: {
    margin: 10,
    padding: 0,
    listStyleType: 'none',
  }
});

const mapStateToProps = state => {
  return {
    geneNames: state.gene_names.geneNames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPossibleGeneNames: (partialName) => dispatch(fetchPossibleGeneNames(partialName)),
    fetchGeneData: (gene) => dispatch(fetchGeneData(gene))
  }
}

export default  withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Search_Bar)))
