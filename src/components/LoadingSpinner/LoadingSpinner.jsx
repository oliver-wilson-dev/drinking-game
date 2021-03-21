/*
  eslint-disable
  import/no-unresolved,
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-static-element-interactions
*/
import React from 'react';
import cn from 'classnames';

import styles from './LoadingSpinner.module.css';

const onClick = (e) => {
  e.stopPropagation();
};

const LoadingSpinner = ({ show }) => (
  <>
    <div
      className={cn(styles.wrapper,
        {
          [styles.wrapperShow]: show,
          [styles.wrapperHide]: !show
        })}
      onClick={onClick}
    />
    <div className={cn(styles.loadingSpinner,
      {
        [styles.loadingSpinnerShow]: show,
        [styles.loadingSpinnerHide]: !show
      })}
    />
  </>
);

export default LoadingSpinner;
