import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  makeReservation = event => {
    event.preventDefault();
    const newRes = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newRes)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: 0})
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
         <input
          type='date'
          placeholder='Date(mm/dd)'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
         <input
          type='time'
          min='17:00'
          max='23:00'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
         <input
          type='number'
          placeholder='Number of guests'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.makeReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}


export default Form;