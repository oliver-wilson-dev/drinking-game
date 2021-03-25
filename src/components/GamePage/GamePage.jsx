import React from 'react';
import cn from 'classnames';
import Page from '../Page';
import useSocket from './hooks/useSocket';
import styles from './GamePage.module.css';

const GamePage = () => {
  const { question, hide, } = useSocket();

  return (
    <Page className={styles.page}>
      <h1
        className={cn(styles.text, {
          [styles.hide]: hide
        })}
      >
        {question}
      </h1>
    </Page>
  );
};

export default GamePage;
