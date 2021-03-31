/* eslint-disable consistent-return */
import { useState } from 'react';
import axios from 'axios';

const useGetGame = () => {
  const [gameExists, setGameExists] = useState(false);

  const getGame = async ({ partyID }) => {
    try {
      const game = await axios.get(`${window.location.origin}/get-game`, {
        params: {
          partyID
        }
      });

      if (game?.data) {
        setGameExists(true);
        return game;
      }
    } catch (error) {
      setGameExists(false);
    }
  };

  return {
    getGame,
    gameExists
  };
};

export default useGetGame;
