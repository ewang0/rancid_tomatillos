import React, { Component } from 'react';
import './App.scss';
import Nav from './Nav';
import MovieSection from './MovieSection';
import Modal from './Modal.js';
import Search from './search';
import { getAllMovies, getSingleMovie } from './apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      error: '',
      showModal: false,
      selectedMovie: {},
      loaded: false,
      searchfield: ''
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
    const { movieData, loaded, searchField } = this.state;
    let filteredMovies = movieData.movies;
    if (loaded && searchField) {
      filteredMovies = movieData.movies.filter(movie => (
        movie.title.toLowerCase().includes(searchField.toLowerCase())
      ))
      console.log('filteredMovies', filteredMovies)
    } else {
      filteredMovies = movieData.movies;
    }


    return (
      <main className="app">
        <Nav />
        {/* <Banner /> */}
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
        <Search handleChange={(e) => this.setState({searchField:e.target.value})}/>
          <div>
            {this.state.loaded ? <MovieSection data={filteredMovies} toggleModal={this.toggleModal} /> : <h1>Loading</h1>}
          </div>
      </main>
    );
  }
}

export default App;
