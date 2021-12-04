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
      show: false,
    };
  }

  toggleModal = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <main className="app">
        <Nav />
        <div>
          {/* <div className="btn" onClick={this.toggleModal}>
            <button>Modal</button>
          </div> */}
          {this.state.show ? <Modal toggleModal={this.toggleModal} /> : null}
        </div>
        <MovieSection movies={this.state.movieData.movies} toggleModal={this.toggleModal} />
      </main>
    );
  }
}

export default App;
