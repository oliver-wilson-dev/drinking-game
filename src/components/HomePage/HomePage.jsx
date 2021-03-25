import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Page from '../Page';
import styles from './HomePage.module.css';

import routes from '../../routes';
import { MAX_ID_LENGTH } from '../../helpers/generateId';
import Input from '../Input';

const HomePage = () => {
  const [inputVal, setInputVal] = useState('');

  const inputOnChange = useCallback((event) => {
    setInputVal(event.target.value);
  }, [setInputVal]);

  return (
    <Page className={styles.page}>
      <div className={styles.top}>
        <h1 className={cn(styles.title, styles.text)}>Let&apos;s party 😜🍻</h1>
        <Input
          type="number"
          value={inputVal}
          className={styles.input}
          onChange={inputOnChange}
          placeholder="enter party ID"
        />
        <Link
          to={`${routes.game.route}/${inputVal}`}
          className={cn(styles.btn, styles.text, styles.codeBtn, {
            [styles.disabled]: inputVal.length !== MAX_ID_LENGTH
          })}
        >
          Go!
        </Link>
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
