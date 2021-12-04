import React, { Component } from 'react';
import movieData from './movieData';
import './App.scss';
import Nav from './Nav';
import MovieSection from './MovieSection';
import MovieCard from './MovieCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData,
    };
  }

  render() {
    return (
      <main className="app">
        <Nav />
        <MovieSection createCards={this.state.movieData}/>
      </main>
    );
  }
}

export default App;
