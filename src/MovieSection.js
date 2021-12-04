import React from 'react';
import MovieCard from './MovieCard';
import './MovieSection.js';

const MovieSection = (movieDataArray) => {
  const createCards = movieDataArray.createCards.map(movie => {
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