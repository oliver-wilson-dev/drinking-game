import React from 'react';
import Cross from '../../assets/cross.svg';
import styles from './NamesListItem.module.css';

const NamesListItem = ({ name, removePlayer }) => (
  <li className={styles.listItem}>
    <Cross className={styles.cross} onClick={removePlayer} />
    <span>{name}</span>
  </li>
);

export default NamesListItem;
