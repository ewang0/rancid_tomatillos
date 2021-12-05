import React, { Component } from 'react';
import movieData from './movieData';
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
      selectedMovie: {},
      loaded: false
    };
  }

  componentDidMount = () => {
    getAllMovies()
      .then(data => { 
        const movies = this.destructureMovieData(data)
        this.setState({ movieData: {movies} }) 
      })
      .catch(error => this.setState({ error: 'Error fetching data'}))
      .finally(() => this.setState({loaded: true}))
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
          {this.state.showModal ? <Modal id={selectedMovie.id} title={selectedMovie.title} averageRating={selectedMovie.average_rating} backdropPath={selectedMovie.backdrop_path} releaseDate={selectedMovie.release_date} toggleModal={this.toggleModal} /> : null}
        </div>
        <div>
          {this.state.loaded ? <MovieSection data={this.state.movieData.movies} toggleModal={this.toggleModal} /> : <h1>Loading</h1>}
        </div>
      </main>
    );
  }
}

export default App;
