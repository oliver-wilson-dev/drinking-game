import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

const useSocket = () => {
  const { partyID } = useParams();
  const [question, setQuestion] = useState();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const socket = io({
      query: { partyID }
    });

    socket.on('NEXT_QUESTION', (newQuestion) => {
      setHide(true);
      setTimeout(() => {
        setQuestion(newQuestion);
        setHide(false);
      }, 2000);
    });
  }, [partyID]);

  return { question, hide };
};

export default useSocket;
