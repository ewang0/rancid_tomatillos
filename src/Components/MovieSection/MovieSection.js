import React from 'react';
import './MovieSection.scss'
import MovieCard from '../MovieCard/MovieCard';
import './MovieSection.js';

const MovieSection = ({data, toggleModal}) => {
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
    <section className='movie-section'>
        <span className='movie-section-header'>
            <h2> All movies </h2>
            <ul className='genres'>
                <li>ACTION</li>
                <li>ADVENTURE</li>
                <li>ANIMATION</li>
                <li>COMEDY</li>
                <li>CRIME</li>
                <li>DRAMA</li>
                <li>FAMILY</li>
                <li>FANTASY</li>
                <li>HISTORY</li>
                <li>HORROR</li>
                <li>MUSIC</li>
                <li>ROMANCE</li>
                <li>SCI-FI</li>
                <li>THRILLER</li>
                <li>WAR</li>
            </ul>
        </span>
        <div className='movie-container'>
            {createCards}
        </div>
    </section>
)
   

}

export default MovieSection;