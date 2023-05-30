import React from 'react'
import Card from '../Card/Card'
import './Reservations.css'


const Reservations = ({reservations}) => {
  console.log(reservations)
  const reservationCards = reservations.map(reservation => {
    return (
      <Card 
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        key={reservation.id}
      />
    )
  })
  return (
    <div className='reservations-container'>
      {reservationCards}
    </div>
  )
}


export default Reservations