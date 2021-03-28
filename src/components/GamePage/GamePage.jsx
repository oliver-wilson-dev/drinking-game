import React, { useEffect } from 'react';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import Page from '../Page';
import useSocket from './hooks/useSocket';
import Button from '../Button/Button';

import styles from './GamePage.module.css';

const GamePage = () => {
  const {
    hide,
    seconds,
    question,
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
      <div>
        <h1 className={styles.partyID}>
          The party ID is:
          {' '}
          <code>{partyID}</code>
        </h1>
        <div className={styles.progBarContainer}>
          <span className={styles.progBarBackground}>
            <span className={cn(styles.progBarProgress, styles[`progBarProgress${seconds}`])} />
          </span>
        </div>
      </div>
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
