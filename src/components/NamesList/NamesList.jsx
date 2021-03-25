import React from 'react';
import styles from './NamesList.module.css';
import NamesListItem from '../NamesListItem';

const NamesList = ({ removePlayer, players }) => (
  <ul className={styles.list}>
    {players.map((name) => (
      <NamesListItem key={name} name={name} removePlayer={removePlayer(name)} />
    ))}
  </ul>
);

export default React.memo(NamesList);
