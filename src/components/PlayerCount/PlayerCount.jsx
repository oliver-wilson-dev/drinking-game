import React, { memo } from 'react';
import styles from './PlayerCount.module.css';

const PlayerCount = ({ players }) => (
  <span className={styles.playerCount}>
    player count:
    {' '}
    <span className={styles.playerCountNumber}>
      {players.length}
      /6
    </span>
  </span>
);

export default memo(PlayerCount);
