import React from 'react';
//import styles from './..';

export default function Card({ image, name, types }) {
  // acá va tu código
  return (
    <div>
      <div>
          <img src={image} alt="pokemon image" width="200px" height="130px" />
          <h2>{name}</h2>
          <h4>{types}</h4>
      </div>
    </div>
  )
};