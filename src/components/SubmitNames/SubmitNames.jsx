import React from 'react';
import Link from '../Link';
import routes from '../../routes';
import styles from './SubmitNames.module.css';

const SubmitNames = ({ notEnoughPlayers }) => (
  <Link
    to={routes.lobby.route}
    className={styles.link}
    disabled={notEnoughPlayers}
  >
    Start Game
  </Link>
);

export default SubmitNames;
