import React, { Component } from 'react';
import movieData from './movieData';
import MovieSection from './MovieSection'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData,
    };
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <MovieSection createCards={this.state.movieData}/>
      </main>
    );
  }
}

export default App;
