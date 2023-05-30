import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [
        {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
        },
        {
        "id": 2,
        "name": "Leta",
        "date": "4/5",
        "time": "7:00",
        "number": 2
        }
      ]
    }
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
