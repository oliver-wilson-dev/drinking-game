import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import routes from '../../routes';
import styles from './SubmitNames.module.css';

const SubmitNames = ({ notEnoughPlayers }) => (
  <Link
    to={routes.lobby.route}
    className={cn(styles.startGameBtn, { [styles.disabled]: notEnoughPlayers })}
  >
    Start Game
  </Link>
);

export default SubmitNames;
