import logo from './logo.svg';
import React, { Component } from 'react';
import movieData from './movieData';
import './App.scss';
import Nav from './Nav';
import MovieSection from './MovieSection';
import MovieCard from './MovieCard';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Nav />
      <MovieSection />
    );
  }
}

export default App;
