import React from 'react';
import cn from 'classnames';
import styles from './Page.module.css';
import { useScrollTop } from '../../hooks';

const Page = ({ children, className }) => {
  useScrollTop();

  return (
    <div className={cn(styles.page, className)}>
      {children}
    </div>
  );
};

export default Page;
