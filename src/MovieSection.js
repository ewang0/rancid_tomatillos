import React from 'react';
import './MovieSection.scss'
import MovieCard from './MovieCard';
import './MovieSection.js';

const MovieSection = ({data, toggleModal}) => {
    const createCards = data.map(movie => {
        return (
        <MovieCard
            id={movie.id}
            title={movie.title}
            average_rating={movie.average_rating}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            toggleModal={toggleModal} 
        />
        )
})

// const createCards = console.log(data);

return (
    <section className='movie-section'>
        <h2> All movies </h2>
        <div className='movie-container'>
            {createCards}
        </div>
    </section>
)
   

}

export default MovieSection;