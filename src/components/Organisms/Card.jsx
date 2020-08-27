import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id,section, img, name }) => {
  console.log(id);
  return (
    <article className="card s-border">
      <div className="img-container s-ratio-16-9">
        <Link to={`/${section}/${id}`}>
          <img src={img} alt={name} />
        </Link>
      </div>
      <div className="card_data s-pxy-2">
        <h3 className="t4 center">{name}</h3>
      </div>
    </article>
  )
}

export default Card
