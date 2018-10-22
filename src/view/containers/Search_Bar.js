import React from 'react'

export default class Search_Bar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      InputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({ 'InputValue': event.target.value })
    console.log(this.state)
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('form submitted')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.InputValue} onChange={this.handleChange}/>
      </form>
    )
  }
}
