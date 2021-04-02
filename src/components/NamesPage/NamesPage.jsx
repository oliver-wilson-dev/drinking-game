import React from 'react';
import Page from '../Page';
import styles from './NamesPage.module.css';
import NamesList from '../NamesList';
import Input from '../Input';
import PlayerCount from '../PlayerCount/PlayerCount';
import SubmitNames from '../SubmitNames';
import useNamesPage from './hooks/useNamesPage';
import Button from '../Button/Button';

const NamesPage = ({ players, updatePlayers }) => {
  const {
    maxPlayers,
    inputValue,
    handleSubmit,
    removePlayer,
    inputOnChange,
    notEnoughPlayers
  } = useNamesPage({ players, updatePlayers });

  return (
    <Page className={styles.page}>
      <div className={styles.top}>
        <h2>Who&apos;s playing?</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputContainer}>
            <Input
              placeholder={maxPlayers ? '' : 'add player...'}
              type="text"
              className={styles.input}
              value={inputValue}
              onChange={inputOnChange}
              disabled={maxPlayers}
              maxLength={12}
            />
            <Button
              className={styles.addPlayerBtn}
              type="submit"
              disabled={maxPlayers || !inputValue}
            >
              Add player
            </Button>
          </div>
          <PlayerCount players={players} />
        </form>
        <NamesList players={players} removePlayer={removePlayer} />
      </div>
      <div className={styles.startGameBtnContainer}>
        <SubmitNames notEnoughPlayers={notEnoughPlayers} />
      </div>
    </Page>
  );
};

export default NamesPage;
