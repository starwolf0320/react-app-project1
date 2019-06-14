import React from 'react';

import './CardList.css';
import CardItem from '../CardItem';

const CardList = props => (
  <div className='container'>
    <div className='row'>
      {props.movies.map((movie, index) => (
        <CardItem key={movie.id} imageClick={props.imageClick} movie={movie} />
      ))}
    </div>
  </div>
);

export default CardList;
