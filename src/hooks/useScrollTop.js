/* eslint-disable max-len */
import { useEffect } from 'react';

const useScrollTop = () => {
  useEffect(() => {
    /*
        When on the home page the user enters the partyID on iOS
        page can be slightly scrolled down as it moves the focused element into the view of the user.
    */
    window.scrollTo(0, 0);
  }, []);
};

export default useScrollTop;
