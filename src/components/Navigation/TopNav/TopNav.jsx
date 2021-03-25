import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import ThemeSwitch from '../../../containers/ThemeSwitch';

import styles from './TopNav.module.css';

const { home, names, lobby } = routes;

const TopNav = () => (
  <nav className={styles.navigation}>
    <ThemeSwitch />
    <ul className={styles.navItems}>
      <li className={styles.navItem}>
        <NavLink className={styles.link} exact activeClassName={styles['link--active']} to={home.route}>Home</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink className={styles.link} activeClassName={styles['link--active']} to={names.route}>About</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink className={styles.link} activeClassName={styles['link--active']} to={lobby.route}>Contact</NavLink>
      </li>
    </ul>
  </nav>
);

export default TopNav;
