import { useState } from 'react';
import axios from 'axios';

const useGetGame = () => {
  const [gameExists, setGameExists] = useState(false);

  const getGame = async () => {
    const game = await axios.get(`${window.location.origin}/get-game`);

    console.log(game);
    if (game?.data) {
      setGameExists(true);
    }
  };

  return {
    getGame,
    gameExists
  };
};

export default useGetGame;
