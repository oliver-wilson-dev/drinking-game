import React from 'react';
import TopNav from './TopNav';
import styles from './Navigation.module.css';
import SideNav from './SideNav';

const Navigation = () => (
  <div className={styles.navigation}>
    <TopNav />
    <SideNav />
  </div>
);

export default Navigation;
