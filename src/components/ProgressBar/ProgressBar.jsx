import React from 'react';
import cn from 'classnames';

import styles from './ProgressBar.module.css';

const ProgressBar = ({ seconds }) => (
  <div className={styles.progBarContainer}>
    <span className={styles.progBarBackground}>
      <span className={cn(styles.progBarProgress, styles[`progBarProgress${seconds}`])} />
    </span>
  </div>
);

export default ProgressBar;
