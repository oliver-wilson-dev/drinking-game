import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Link.module.css';

const Link = ({
  to,
  className,
  disabled,
  children
}) => (
  <RouterLink
    to={to}
    className={cn(
      styles.link,
      className,
      {
        [styles.disabled]: disabled
      }
    )}
  >
    {children}
  </RouterLink>
);

export default Link;
