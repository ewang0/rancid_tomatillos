import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import MovieSection from '../MovieSection/MovieSection';
import Modal from '../Modal/Modal.js';
import Banner from '../Banner/Banner';
import About from '../About/About';
import { getAllMovies, getSingleMovie, getSingleMovieTrailer } from '../../apiCalls';
import { Routes, Route, NavLink } from 'react-router-dom'
import Error from '../Error/Error';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      detailedMovieData: [],
      error: '',
      showModal: false,
      selectedMovie: {},
      selectedMovieTrailerKey: {},
      loaded: false,
      searchField: '',
      currentGenre: '',
    };
  }

  componentDidMount = () => {
    getAllMovies()
      .then(data => {
        const movieData = data.movies;
        this.setState({ movieData });
      })
      .then(() => {
        const detailedMovies = [];
        this.state.movieData.forEach((movie) => {
          //remove bad API data
          if(!(movie.id === 585244) &&
            !(movie.id === 737173) &&
            !(movie.id === 737799)) {
              getSingleMovie(movie.id)
              .then(data => {
                detailedMovies.push(data.movie)
              })
              .then(() => {
                this.setState({ detailedMovieData: detailedMovies })
              })
              .catch(error => this.setState({ error: '404 error fetching single movie data'}))
              .then(() => {
                this.addGenres()
              })
            }
          })
        })
        .catch(error => this.setState({ error: '404 error fetching all movie data'}))
        .finally(() => this.setState({loaded: true}))   
  }

  toggleModal = (id) => {
    const currentStateOfShowModal = this.state.showModal;
    this.setState({ showModal: false })
    if(!currentStateOfShowModal) {
      getSingleMovie(id).then(data => { 
        this.setState({
          showModal: true,
          selectedMovie: data.movie
        })
        getSingleMovieTrailer(id).then(data => {
          this.setState({
            selectedMovieTrailerKey: data.videos.find(video => video.type === 'Trailer').key
          })
        })
      });
    }
  }

  addGenres = () => {
      this.state.movieData.forEach(movie => {
        this.state.detailedMovieData.forEach(detailedMovie => {
          if(movie.id === detailedMovie.id){
            movie['genres'] = detailedMovie.genres
          }
        })
      })
  }

  filterByGenre = (genre) => {
    this.setState({ currentGenre: genre })
  }


  render() {
    const { movieData, searchField, selectedMovie, selectedMovieTrailerKey, loaded, showModal, detailedMovieData, currentGenre, error } = this.state;
    let newArray = movieData;

    if(!currentGenre || currentGenre === 'All Movies'){
      newArray = movieData
    } else if(currentGenre) {
      newArray = movieData.filter(movie => (
        movie.genres && movie.genres.includes(currentGenre)
      ))
    };

    let filteredMovies = newArray.filter(movie => (
      movie.title.toLowerCase().includes(searchField.toLowerCase())
    ));

    return (
      <main className="app">
      { error ? <Error error={error} /> : null}
        <Nav handleChange={(e) => this.setState({searchField:e.target.value})}  />
        <Routes>
            <Route path="/" element={      
                <section>
                  <Banner data={this.state.detailedMovieData}/>
                  {loaded ? <MovieSection data={newArray} detailedData={detailedMovieData} toggleModal={this.toggleModal} filterByGenre={this.filterByGenre} header={'All Movies'}/> : <h1>Loading</h1>}
                  {showModal ? <Modal selectedMovie={selectedMovie} selectedMovieTrailerKey={selectedMovieTrailerKey} toggleModal={this.toggleModal}/> : null}
                </section>
              } />
            <Route path="/about" element={<About />}/>
            <Route path="/search" element={
              <section>
                {loaded ? <MovieSection data={!searchField ? [] : filteredMovies} toggleModal={this.toggleModal} filterByGenre={this.filterByGenre} header={'All Movies'}/> : <h1>Loading</h1>}
                {showModal ? <Modal selectedMovie={selectedMovie} selectedMovieTrailerKey={selectedMovieTrailerKey} toggleModal={this.toggleModal}/> : null}
              </section>
            } />
        </Routes>
      </main>

    );
  }
}

export default App;
