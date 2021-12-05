import React, { Component } from 'react';
// import movieData from './movieData';
import './App.scss';
import Nav from './Nav';
import MovieSection from './MovieSection';
import Modal from './Modal.js';
import { getAllMovies } from './apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      error: '',
      showModal: false,
      selectedMovie: {}
    };
  }

  componentDidMount = () => {
    getAllMovies()
      .then(data => { 
        const movies = this.destructureMovieData(data)
        this.setState({ movieData: {movies} }) })
      .catch(error => this.setState({ error: 'Error my dude'}))
  }

  destructureMovieData = (data) => {
    return data.movies;
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
        <MovieSection data={this.state.movieData} toggleModal={this.toggleModal} />
      </main>
    );
  }
}

export default App;
