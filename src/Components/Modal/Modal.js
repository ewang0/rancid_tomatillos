import React from 'react';
import './Modal.scss';
import ReactStars from 'react-stars';
import ReactPlayer from "react-player"
import x_icon from '../../images/x_icon.png';

const Modal = ({ selectedMovie, toggleModal, selectedMovieTrailerKey }) => {

  const movieTrailer = `https://www.youtube.com/watch?v=${selectedMovieTrailerKey}`

  return (
      <div className='modal' onClick={(e) => e.target.classList.contains('modal') ? toggleModal() : console.log(e.target.classList)}>
        <button className='close-modal' onClick={toggleModal}><img src={x_icon} alt='icon.png'/></button>
        <div className='modal_content'>
          <section className='modal-info'>
            <h2>{selectedMovie.title}</h2>

            <span className="ratings-wrapper">
                <div className='ratingsContainer'>
                    <ReactStars className='reactStars' count={5} value={selectedMovie.average_rating/2} size={15} color2={'#a4c91c'} color1={'#5c5c5c'} />
                </div>
                <p><b>{(selectedMovie.average_rating/2).toFixed(1)}</b></p>
            </span>
            <p>{selectedMovie.overview}</p>
            <table>
              <tr>
                <th>Budget</th>
                <th className="table-value">${selectedMovie.budget}</th>
              </tr>
              <tr>
                <th>Revenue</th>
                <th className="table-value">${selectedMovie.revenue}</th>
              </tr>
            </table>
          </section>
          <ReactPlayer className='react-player' url={movieTrailer} light={selectedMovie.backdrop_path} onError={console.log('trailer not available')} controls='true' playing='true' width={'98%'} />
        </div>
      </div>
  )
}


export default Modal;