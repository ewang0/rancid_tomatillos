import React, { Component } from 'react';
import movieData from './movieData';
import './App.scss';
import Nav from './Nav';
import MovieSection from './MovieSection';
import Modal from './Modal.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData,
      showModal: false,
      selectedMovie: {}
    };
  }

  toggleModal = (id) => {
    const movieObject = this.state.movieData.movies.find((movie) => movie.id === id);
    this.setState({
      showModal: !this.state.showModal,
      selectedMovie: movieObject
    })
    console.log(this.state.selectedMovie)
  }

  render() {
    const selectedMovie = this.state.selectedMovie;
    return (
      <main className="app">
        <Nav />
        <div>
          {/* <div className="btn" onClick={this.toggleModal}>
            <button>Modal</button>
          </div> */}
          {this.state.showModal ? <Modal id={selectedMovie.id} title={selectedMovie.title} averageRating={selectedMovie.average_rating} backdropPath={selectedMovie.backdrop_path} releaseDate={selectedMovie.release_date} toggleModal={this.toggleModal} /> : null}
        </div>
        <MovieSection movies={this.state.movieData.movies} toggleModal={this.toggleModal} />
      </main>
    );
  }
}

export default App;
