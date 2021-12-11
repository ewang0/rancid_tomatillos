import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import MovieSection from '../MovieSection/MovieSection';
import Modal from '../Modal/Modal.js';
import Banner from '../Banner/Banner';
import About from '../About/About';
import { getAllMovies, getSingleMovie, getSingleMovieTrailer } from '../../apiCalls';
import { Routes, Route, NavLink } from 'react-router-dom'



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
          getSingleMovie(movie.id)
            .then(data => {
              detailedMovies.push(data.movie)
            })
            .then(() => {
              this.setState({ detailedMovieData: detailedMovies})
            })
        })
      })
      .catch(error => this.setState({ error: 'Error fetching data'}))
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


  render() {
    const { movieData, searchField, selectedMovie, selectedMovieTrailerKey, loaded, showModal } = this.state;
    const filteredMovies = movieData.filter(movie => (
      movie.title.toLowerCase().includes(searchField.toLowerCase())
    ))

    return (
      <main className="app">
        <Nav handleChange={(e) => this.setState({searchField:e.target.value})}  />
        <Routes>
            <Route path="/" element={      
                <section>
                  <Banner data={this.state.detailedMovieData.sort((a,b) => 0.5-Math.random())}/>
                  {loaded ? <MovieSection data={movieData} toggleModal={this.toggleModal} header={'All Movies'}/> : <h1>Loading</h1>}
                  {showModal ? <Modal selectedMovie={selectedMovie} selectedMovieTrailerKey={selectedMovieTrailerKey} toggleModal={this.toggleModal}/> : null}
                </section>
              } />
            <Route path="/about" element={<About />}/>
            <Route path="/search" element={
              <section>
                {loaded ? <MovieSection data={!searchField ? [] : filteredMovies} toggleModal={this.toggleModal} header={'Find movies...'}/> : <h1>Loading</h1>}
                {showModal ? <Modal selectedMovie={selectedMovie} selectedMovieTrailerKey={selectedMovieTrailerKey} toggleModal={this.toggleModal}/> : null}
              </section>
            } />
        </Routes>
      </main>

    );
  }
}

export default App;
