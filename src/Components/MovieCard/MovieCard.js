import React from 'react';
import './MovieCard.scss';
import ReactStars from 'react-stars';

const formatTitle = (title) => {
  if(title.length > 33) {
    let abbreviatedTitle = title.substring(0, 30).concat('...');
    return abbreviatedTitle;
  } else {
    return title;
    }
}
const MovieCard = ({id, poster_path, title, average_rating, release_date, toggleModal}) => {
    const year = release_date.slice(0,4);
    return (
        <div className='card' onClick={() => toggleModal(id)}>
          <div className="imgContainer">
            <img src={poster_path}/>
          </div>
          <div className='cardBottom'>
            <div className='cardInfo'>
              <p className='cardTitle'>{formatTitle(title)}</p>
              <p className='cardYear'>{year}</p>
            </div>
            <span className="ratings-wrapper">
              <div className='ratingsContainer'>
                <ReactStars className='reactStars' count={5} value={average_rating/2} size={15} color2={'#a4c91c'} color1={'#141414'} />
              </div>
              <p><b>{(average_rating/2).toFixed(1)}</b></p>
            </span>
          </div>
        </div>
       )
}

export default MovieCard;