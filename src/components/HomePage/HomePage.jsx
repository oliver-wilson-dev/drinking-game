import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { Redirect } from 'react-router-dom';
import Page from '../Page';
import Link from '../Link';
import Button from '../Button';
import routes from '../../routes';
import { MAX_ID_LENGTH } from '../../helpers/generateId';
import Input from '../Input';

import styles from './HomePage.module.css';
import useGetGame from './hooks/useGetGame';

const HomePage = () => {
  const [placeholder, setPlaceholder] = useState('Enter party ID');
  const [inputVal, setInputVal] = useState('');
  const {
    getGame,
    gameExists
  } = useGetGame();

  const inputOnChange = useCallback((event) => {
    setInputVal(event.target.value);
    setPlaceholder('Enter party ID');
  }, [setInputVal]);

  const onFocus = useCallback(() => {
    setPlaceholder('Enter party ID');
  }, [setPlaceholder]);

  const enterPartyId = useCallback((event) => {
    event.preventDefault();
    setInputVal('');
    setPlaceholder('Wrong party ID');

    getGame();
  }, [setInputVal, getGame]);

  return (
    <Page className={styles.page}>
      <div className={styles.top}>
        <h1 className={cn(styles.title, styles.text)}>Let&apos;s party 😜🍻</h1>
        <Input
          type="number"
          value={inputVal}
          className={styles.input}
          onChange={inputOnChange}
          placeholder={placeholder}
          onFocus={onFocus}
        />
        <Button
          className={styles.codeLink}
          disabled={inputVal.length !== MAX_ID_LENGTH}
          onClick={enterPartyId}
        >
          Go!
        </Button>
        {gameExists && <Redirect to={`${routes.game.route}/${inputVal}`} />}
      </div>
      <div className={styles.bottom}>
        <Link
          to={routes.names.route}
          className={cn(styles.startGameBtn, styles.text)}
        >
          Create new game
        </Link>
      </div>
    </Page>
  );
};

export default HomePage;
