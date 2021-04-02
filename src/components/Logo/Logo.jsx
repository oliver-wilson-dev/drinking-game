import React from 'react';
import cn from 'classnames';

import styles from './Logo.module.css';

const Logo = ({ className }) => (
  <h1 className={cn(styles.title, className)}>Sip or Skip</h1>
);

export default Logo;
