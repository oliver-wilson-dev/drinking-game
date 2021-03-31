import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import cn from 'classnames';
import Page from '../Page';
import useSocket from './hooks/useSocket';
import Button from '../Button';
import ProgressBar from '../ProgressBar';
import routes from '../../routes';

import styles from './GamePage.module.css';

const GamePage = () => {
  const {
    hide,
    paused,
    partyID,
    seconds,
    question,
    playerCount,
    skipQuestion,
    gameUndefined,
    togglePauseState,
  } = useSocket();

  useEffect(() => {
    /*
      When on the home page the user enters the partyID on iOS
      page can be slightly scrolled down as it moves the focused element into the view of the user.
    */
    window.scrollTo(0, 0);
  }, []);

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
          <Button className={styles.pauseBtn} onClick={togglePauseState}>{paused ? 'Resume' : 'Pause'}</Button>
          <Button className={styles.skipBtn} onClick={skipQuestion}>Skip</Button>
        </div>
      </Page>
      {gameUndefined && <Redirect to={routes.home.route} />}
    </>
  );
};

export default GamePage;
