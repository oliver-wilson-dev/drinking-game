import React from 'react';
import { Redirect } from 'react-router-dom';
import cn from 'classnames';
import Page from '../Page';
import useSocket from './hooks/useSocket';
import Button from '../Button';
import ProgressBar from '../ProgressBar';
import Pause from './assets/pause.svg';
import Play from './assets/play.svg';
import routes from '../../routes';

import styles from './GamePage.module.css';

const GamePage = () => {
  const {
    hide,
    paused,
    partyID,
    seconds,
    redirect,
    question,
    playerCount,
    skipQuestion,
    togglePauseState,
  } = useSocket();

  return (
    <>
      <Page className={styles.page}>
        <header className={styles.header}>
          {partyID && playerCount && (
          <h1 className={styles.partyID}>
            <span>
              Party ID -
              {' '}
              <code>{partyID}</code>
            </span>
            {' '}
            <span>{`${playerCount} player${playerCount > 1 ? 's' : ''}`}</span>
          </h1>
          )}
          <ProgressBar seconds={seconds} />
        </header>
        <p
          className={cn(styles.text, {
            [styles.hide]: hide
          })}
        >
          {question}
        </p>
        <div className={styles.btnContainer}>
          <Button className={styles.pauseBtn} onClick={togglePauseState}>
            <span>{paused ? 'Resume' : 'Pause'}</span>
            {paused ? <Play className={styles.icon} /> : <Pause className={styles.icon} />}
          </Button>
          <Button className={styles.skipBtn} onClick={skipQuestion}>Skip</Button>
        </div>
      </Page>
      {redirect && <Redirect to={routes.home.route} />}
    </>
  );
};

export default GamePage;
