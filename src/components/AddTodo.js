import React, { Component } from 'react'

export class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render () {
    return (
      <div className='input-wrapper'>
        <form onSubmit={this.onSubmit} className='form-wrapper'>
          <input
            type='text'
            name='title'
            placeholder='Add Todo ...'
            value={this.state.title}
            onChange={this.onChange}
          />
          <input type='submit' value='Submit' className='btn' />
        </form>
      </div>
    )
  }
}

export default AddTodo
