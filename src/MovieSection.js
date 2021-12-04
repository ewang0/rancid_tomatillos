import React from 'react';
import './MovieSection.scss'
import MovieCard from './MovieCard';
import './MovieSection.js';

const MovieSection = (props) => {
  const createCards = props.movies.map(movie => {
    return (
      <MovieCard
        id={movie.id}
        title={movie.title}
        averageRating={movie.average_rating}
      />
    )
  })

  return (
    <div className='movies-container'>
      {createCards}
    </div>
  )
}

export default MovieSection;