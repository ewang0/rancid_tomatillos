import React from 'react';
import './MovieSection.scss'
import MovieCard from '../MovieCard/MovieCard';
import './MovieSection.js';

const MovieSection = ({data, toggleModal, header}) => {
    const createCards = data.map(movie => {
        return (
        <MovieCard
            key={movie.id}
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
    <section className={'movie-section'}>
        <h2>{header}</h2>
        <div className='movie-container'>
            {createCards}
        </div>
    </section>
)
   

}

export default MovieSection;