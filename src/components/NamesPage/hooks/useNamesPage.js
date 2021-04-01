import { useState, useEffect, useCallback } from 'react';

const MAX_NUMBER_OF_PLAYERS = 6;
const MIN_NUMBER_OF_PLAYERS = 2;

const isMaxPlayers = (players) => players.length === MAX_NUMBER_OF_PLAYERS;
const minPlayersReached = (players) => !(players.length >= MIN_NUMBER_OF_PLAYERS);

const useNamesPage = ({ players, updatePlayers }) => {
  const [inputValue, setInputValue] = useState('');
  const [maxPlayers, setMaxPlayers] = useState(isMaxPlayers(players));
  const [notEnoughPlayers, setNotEnoughPlayers] = useState(minPlayersReached(players));

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!inputValue) return;
    updatePlayers({ players: [...players, inputValue] });
    setInputValue('');
  }, [inputValue, players, updatePlayers]);

  const removePlayer = useCallback((playerName) => () => {
    updatePlayers({ players: players.filter((name) => name !== playerName) });
  }, [updatePlayers, players]);

  const inputOnChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, [setInputValue]);

  useEffect(() => {
    const maxPlayers = isMaxPlayers(players);
    setMaxPlayers(maxPlayers);
  }, [players, setMaxPlayers]);

  useEffect(() => {
    const enoughPlayers = minPlayersReached(players);
    setNotEnoughPlayers(enoughPlayers);
  }, [setNotEnoughPlayers, players]);

  return {
    inputValue,
    maxPlayers,
    handleSubmit,
    removePlayer,
    inputOnChange,
    notEnoughPlayers,
  };
};

export default useNamesPage;
