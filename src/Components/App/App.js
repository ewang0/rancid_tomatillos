import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import MovieSection from '../MovieSection/MovieSection';
import Modal from '../Modal/Modal.js';
import Search from '../Search/search';
import Banner from '../Banner/Banner';
// import About from '.About';
import { getAllMovies, getSingleMovie } from '../../apiCalls';
import { Routes, Route, NavLink } from 'react-router-dom'


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
        <Routes>
            <Route path="/" element={      
                <section>
                  <Search handleChange={(e) => this.setState({searchField:e.target.value})}/>
                  <Banner />
                  <div>
                    {this.state.loaded ? <MovieSection data={filteredMovies} toggleModal={this.toggleModal} /> : <h1>Loading</h1>}
                  </div>
                  <div>
                      {this.state.showModal ? <Modal selectedMovie={selectedMovie} toggleModal={this.toggleModal}/> : null}
                    </div>
                </section>
              } />
            {/* <Route path="/about" element={<About />}/> */}
        </Routes>
      </main>

    );
  }
}

export default App;
