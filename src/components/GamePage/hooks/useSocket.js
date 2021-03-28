import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

const useSocket = () => {
  const { partyID } = useParams();
  const [question, setQuestion] = useState();
  const [hide, setHide] = useState(false);
  const [seconds, setSeconds] = useState(false);
  const [socket] = useState(io({
    query: { partyID }
  }));

  useEffect(() => {
    socket.emit('JOIN_GAME', { partyID });
  }, [partyID, socket]);

  useEffect(() => {
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
      console.log(seconds);
      setSeconds(seconds);
    });
  }, [partyID, socket]);

  const skipQuestion = useCallback(() => {
    socket.emit('SKIP_QUESTION', { partyID });
  }, [partyID, socket]);

  return {
    hide,
    seconds,
    question,
    skipQuestion,
  };
};

export default useSocket;
