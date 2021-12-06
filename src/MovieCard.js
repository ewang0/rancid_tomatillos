import React from 'react';
import './MovieCard.scss';
import ReactStars from 'react-stars'


const MovieCard = ({id, poster_path, title, average_rating, release_date, toggleModal}) => {
    const year = release_date.slice(0,4);
    return (
        <div className='card' onClick={() => toggleModal(id)}>
          <img src={poster_path}/>
          <div className='cardBottom'>
            <div className='cardInfo'>
              <p className='cardTitle'>{title}</p>
              <p className='cardYear'>{year}</p>
            </div>
            <div className='ratingsContainer'>
              <ReactStars count={5} value={average_rating / 2} size={15} color2={'lightgrey'} />
            </div>
          </div>
        </div>
    )
}

export default MovieCard;