import React from 'react';
import cn from 'classnames';
import styles from './Page.module.css';

const Page = ({ children, className }) => (
  <div className={cn(styles.page, className)}>
    {children}
  </div>
);

export default Page;
