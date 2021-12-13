import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MovieSection.scss'
import MovieCard from '../MovieCard/MovieCard';
import './MovieSection.js';
import { useTransition, animated, config } from 'react-spring';

const MovieSection = ({data, toggleModal, header, filterByGenre}) => {
    const [status, changeStatus] = useState({
        activeObject: null,
        objects: [ 
            { id: 'All Movies' },
            { id: 'Action' }, 
            { id: 'Adventure' }, 
            { id: 'Animation' }, 
            { id: 'Comedy' }, 
            { id: 'Crime' }, 
            { id: 'Drama' }, 
            { id: 'Family' }, 
            { id: 'Fantasy' }, 
            { id: 'History' },
            { id: 'Horror' },
            { id: 'Music' },
            { id: 'Romance' },
            { id: 'Science Fiction' },
            { id: 'Thriller' },
            { id: 'War' },
        ]
    })

    const toggleActive = (index) => {
        changeStatus({ ...status, activeObject: status.objects[index] })
        filterByGenre(status.objects[index].id)
    }

    const toggleActiveStyle = (index) => {
        if(status.objects[index] === status.activeObject) {
            return `${status.objects[index].id} active`
        } else {
            return `${status.objects[index].id} inactive`
        }
    }

    const transition = useTransition(true, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 100,
        config: config.molasses,
    })

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
            genres={movie.genres} 
        />
        )
})

    const location = useLocation().pathname;

  return transition(
    (style) =>
      <animated.div style={style} className='movie-section'>
        <span className='movie-section-header'>
            { location === '/search' ? <h1>Search Movies</h1> : <ul className='genres'>
                {status.objects.map((object, index) => (
                    <button key={index} className={toggleActiveStyle(index)} onClick={() => toggleActive(index)}>
                        {object.id}
                    </button>
                ))}
            </ul> }
        </span>
        <div className='movie-container'>
            {createCards}
        </div>
    </animated.div>
  )
}

export default MovieSection;