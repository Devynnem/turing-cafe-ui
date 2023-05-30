import React from 'react'
import './Card.css'


const Card = ({name, date, time, number, id}) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {number}</p>
    </div>
  )
}

export default Card