import React, { Component } from 'react';

import movies from './movies.json';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import CardList from './components/CardList';

class App extends Component {
  state = {
    movies,
    clickedMovie: [],
    score: 0,
    highScore: 0,
    isGuessed: false
  };

  randomGenerator = (a, b) => (Math.random() > 0.5 ? -1 : 1);

  imageClick = id => {
    const currentMovie = id;
    const MovieAlreadyClicked =
      this.state.clickedMovie.indexOf(currentMovie) > -1;

    if (MovieAlreadyClicked) {
      this.setState({
        movies: this.state.movies.sort(this.randomGenerator),
        clickedMovie: [],
        score: 0,
        highScore: 0,
        isGuessed: false
      });
      alert('You lose. Play again?');
    } else {
      let score = this.state.score;
      let movies = this.state.movies;

      this.setState(
        {
          movies: this.state.movies.sort(this.randomGenerator),
          clickedMovie: this.state.clickedMovie.concat(currentMovie),
          score: score + 1,
          highScore: Math.max(this.state.highScore, score),
          isGuessed: true
        },
        () => {
          if (this.state.score === movies.length) {
            alert('Yay! You Win!');
            this.setState({
              movies: this.state.movies.sort(this.randomGenerator),
              clickedMovie: [],
              score: 0,
              highScore: 0
            });
          }
        }
      );
    }
  };

  render() {
    const { movies, score, highScore, isGuessed } = this.state;

    return (
      <div className='application'>
        <Header score={score} highScore={highScore} isGuessed={isGuessed} />
        <div className='wrapper'>
          <CardList movies={movies} imageClick={this.imageClick} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
