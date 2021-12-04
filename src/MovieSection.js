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
        average_rating={movie.average_rating}
        poster_path={movie.poster_path}
        release_date={movie.release_date}
      />
    )
  })

  return (
    <div className='movie-container'>
      {createCards}
    </div>
  )
}

export default MovieSection;