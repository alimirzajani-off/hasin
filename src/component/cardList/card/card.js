import React from 'react'
import { Link } from 'react-router-dom'
import { remove } from '../../../service'
import './card.css'

const Card = (props) => {
  const deleteCard = () => {
    remove(props.index).then((res) => props.getData())
  }
  return (
    <div className="card">
      <Link key={props.id} to={`/detail/${props.id}`}>
        <div>
          <img src={props.image} width="200px" alt="fake" />
          <h4>{props.name}</h4>
        </div>
      </Link>
      <button onClick={() => deleteCard()}>delete</button>
    </div>
  )
}

export default Card
