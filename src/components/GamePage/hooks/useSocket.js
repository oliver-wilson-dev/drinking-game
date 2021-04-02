/* eslint-disable no-unused-expressions */
import {
  useState, useEffect, useCallback
} from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

const socket = io();

const useSocket = () => {
  const { partyID } = useParams();
  const [question, setQuestion] = useState();
  const [hide, setHide] = useState(false);
  const [seconds, setSeconds] = useState(false);
  const [playerCount, setPlayerCount] = useState();
  const [paused, setPaused] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const togglePauseState = () => {
    if (paused) {
      socket.emit('RESUME_GAME', { partyID });
    }

    if (!paused) {
      socket.emit('PAUSE_GAME', { partyID });
    }

    setPaused(!paused);
  };

  useEffect(() => {
    if (socket) {
      socket.emit('JOIN_GAME', { partyID });
    }

    return () => socket.emit('LEAVE_GAME', { partyID });
  }, [partyID]);

  useEffect(() => {
    if (socket) {
      socket.on('NEXT_QUESTION', (newQuestion) => {
        setHide(true);
        setTimeout(() => {
          setQuestion(newQuestion);
          setHide(false);
        }, 1000);
      });

      socket.on('CURRENT_QUESTION', (currentQuestion) => {
        setHide(true);
        setQuestion(currentQuestion);
        setHide(false);
      });

      socket.on('SET_SECONDS', (seconds) => {
        setSeconds(seconds);
      });

      socket.on('PLAYER_COUNT', (playerCount) => {
        setPlayerCount(playerCount);
      });

      socket.on('PAUSED', () => {
        setPaused(true);
      });

      socket.on('RESUMED', () => {
        setPaused(false);
      });

      socket.on('GAME_UNDEFINED', () => {
        setRedirect(true);
      });

      socket.on('END_GAME', () => {
        socket.emit('END_GAME', { partyID });
        setRedirect(true);
      });
    }
  }, [partyID]);

  const skipQuestion = useCallback(() => {
    socket.emit('SKIP_QUESTION', { partyID });
  }, [partyID]);

  return {
    hide,
    paused,
    partyID,
    seconds,
    redirect,
    question,
    playerCount,
    skipQuestion,
    togglePauseState
  };
};

export default useSocket;
