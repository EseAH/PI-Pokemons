import React from 'react';
import styles from './Card.module.css';

export default function Card({ image, name, types, id }) {
  return (
    <div className={styles.Card}>
      <div>
          <img src={image} alt="pokemon" width="200px" height="200px" />
      </div>
      <div className={styles.Name}>
          <h2>{name}</h2>
      </div>
      <div>
          <h4>{types}</h4>
      </div>
      <div>
          <h4>{id}</h4>
      </div>
    </div>
  )
};