import React, { Component } from 'react';
import getData from '../../apiCalls.js';
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getData()
    .then(data => {
      this.setState({ reservations: data })
    })
  }

  addReservation = (newRes) => {
    this.setState({ reservations: [...this.state.reservations, newRes] })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
          {!this.state.reservations.length && <h2>No reservations</h2>}
        </div>
      </div>
    )
  }
}

export default App;
