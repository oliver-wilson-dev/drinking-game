import axios from 'axios';

const getGame = async () => {
  const game = await axios.get(`${window.location.origin}/get-game`);

  return !!game;
};

export default getGame;
