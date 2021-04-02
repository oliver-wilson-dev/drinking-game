import { useEffect } from 'react';

const Fallback = ({ setLoading }) => {
  useEffect(() => {
    setLoading(true);

    return () => setLoading(false);
  }, [setLoading]);

  return null;
};

export default Fallback;
