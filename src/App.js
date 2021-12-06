import React, { Component } from 'react';
import './App.scss';
import Nav from './Nav';
import MovieSection from './MovieSection';
import Modal from './Modal.js';
import Banner from './Banner.js';
import { getAllMovies, getSingleMovie } from './apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      error: '',
      showModal: true,
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
    if(!this.state.showModal) {
      getSingleMovie(id).then(data => { 
        this.setState({
          showModal: !this.state.showModal,
          selectedMovie: data.movie
        })
      });
    } else {
      this.setState({ showModal: !this.state.showModal })
    }
  }

  render() {
    const selectedMovie = this.state.selectedMovie;
    return (
      <main className="app">
        <Nav />
        <Banner />
        <div>
          {this.state.showModal ? 
          <Modal 
            id={selectedMovie.id} 
            title={selectedMovie.title} 
            averageRating={selectedMovie.average_rating} 
            backdropPath={selectedMovie.backdrop_path} 
            releaseDate={selectedMovie.release_date} 
            toggleModal={this.toggleModal} 
            description={selectedMovie.overview} 
            budget={selectedMovie.budget} 
            revenue={selectedMovie.revenue}
            /> 
            : null}
        </div>
          <div>
            {this.state.loaded ? <MovieSection data={this.state.movieData.movies} toggleModal={this.toggleModal} /> : <h1>Loading</h1>}
          </div>
      </main>
    );
  }
}

export default App;
