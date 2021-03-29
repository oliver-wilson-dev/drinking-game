import React, { useEffect } from 'react';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import Page from '../Page';
import useSocket from './hooks/useSocket';
import Button from '../Button';
import ProgressBar from '../ProgressBar';

import styles from './GamePage.module.css';

const GamePage = () => {
  const {
    hide,
    seconds,
    question,
    playerCount,
    skipQuestion
  } = useSocket();

  const { partyID } = useParams();

  useEffect(() => {
    /*
      When on the home page the user enters the partyID on iOS
      page can be slightly scrolled down as it moves the focused element into the view of the user.
    */
    window.scrollTo(0, 0);
  }, []);

  return (
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
      <Button onClick={skipQuestion}>Skip</Button>
    </Page>
  );
};

export default GamePage;
