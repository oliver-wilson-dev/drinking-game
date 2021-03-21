import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import Moon from './assets/moon.svg';
import Sun from './assets/sun.svg';
import styles from './ThemeSwitch.module.css';
import { LIGHT_THEME } from '../../styles/constants';

const ThemeSwitch = ({ theme, toggleTheme, className }) => {
  const [hide, setHide] = useState(false);
  const [hideComplete, setHideComplete] = useState(false);

  useEffect(() => {
    if (hide && hideComplete) {
      setHide(false);
      setHideComplete(false);
      toggleTheme();
    }
  }, [theme, hide, hideComplete]);

  const onClick = () => {
    setHide(true);
  };

  const onTransitionEnd = () => {
    if (hide && !hideComplete) {
      setHideComplete(true);
    }
  };

  return (
    <button className={cn(styles.btn, { [styles.hide]: hide, [styles.show]: !hide }, className)} type="button" onClick={onClick} onTransitionEnd={onTransitionEnd}>
      {theme === LIGHT_THEME ? <Moon className={styles.moon} /> : <Sun className={styles.sun} />}
    </button>
  );
};

export default ThemeSwitch;
