import React from 'react';
import './MovieCard.scss';

const MovieCard = ({id, poster_path, title, average_rating, release_date, toggleModal}) => {
    const year = release_date.slice(0,4);
    return (
        <div className='card' onClick={() => toggleModal(id)}>
            <img src={poster_path}/>
            <h3>{title}</h3>
            <p>{year}</p>
            <p>{average_rating}</p>
        </div>
    )
}

export default MovieCard;