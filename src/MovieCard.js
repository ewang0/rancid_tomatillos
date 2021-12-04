import React from 'react';

import './MovieCard.scss';

const MovieCard = ({id, title, averageRating}) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{averageRating}</p>
    </div>
  )
}

export default MovieCard;