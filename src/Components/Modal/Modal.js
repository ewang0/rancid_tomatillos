import React from 'react';
import './Modal.scss';
import ReactStars from 'react-stars';
import ReactPlayer from "react-player"
import { getSingleMovieTrailer } from '../../apiCalls';
import { mockComponent } from 'react-dom/test-utils';

const Modal = ({ selectedMovie, toggleModal, selectedMovieTrailerKey }) => {

  const movieTrailer = `https://www.youtube.com/watch?v=${selectedMovieTrailerKey}`

  return (
    <div className='modal'>
        <button className='close-modal' onClick={() => toggleModal() }><img src="../x_icon.png" /></button>
        <div className='modal_content'>
          <section className='modal-info'>
            <h2>{selectedMovie.title}</h2>
            <div className='ratingsContainer'>
              <ReactStars count={5} value={selectedMovie.average_rating / 2} size={15} color2={'lightgrey'} />
            </div>
            <p>{selectedMovie.overview}</p>
            <table>
              <tr>
                <th>Budget</th>
                <th>${selectedMovie.budget}</th>
              </tr>
              <tr>
                <th>Revenue</th>
                <th>${selectedMovie.revenue}</th>
              </tr>
            </table>
          </section>
          <ReactPlayer className='react-player' url={movieTrailer} light={selectedMovie.backdrop_path} controls='true' />
          {/* <img src={selectedMovie.backdrop_path}/> */}
        </div>
      </div>
  )
}


export default Modal;