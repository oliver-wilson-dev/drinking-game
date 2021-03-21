/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import CrossIcon from './assets/cross.svg';
import BurgerMenu from './assets/burgerMenu.svg';
import { preventScroll, allowScroll } from './utils/overlay';
import routes from '../../../routes';
import styles from './SideNav.module.css';
import ThemeSwitch from '../../../containers/ThemeSwitch';

const { home, about, contact } = routes;

const ignoreClick = (event) => {
  event.stopPropagation();
};

const SideNav = () => {
  const isFirstRender = useRef(true);
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleShowSideNav = () => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
    setShowSideNav(!showSideNav);
  };

  useEffect(() => {
    if (showSideNav) {
      preventScroll();
    } else {
      allowScroll();
    }
  }, [showSideNav]);

  const onOverlayClick = () => {
    toggleShowSideNav();
  };

  return (
    <>
      <ThemeSwitch className={styles.themeSwitch} />
      <BurgerMenu
        className={cn(styles.icon, {
          [styles.burgerMenuHide]: showSideNav
        })}
        onClick={toggleShowSideNav}
      />
      <CrossIcon
        className={cn(styles.crossIcon, styles.icon, {
          [styles.crossIconShow]: showSideNav
        })}
        onClick={toggleShowSideNav}
      />
      <div
        className={cn(styles.menuContainer, {
          [styles.menuOpen]: showSideNav,
          [styles.menuClose]: !showSideNav,
          [styles.menuHideFirstRender]: isFirstRender.current
        })}
        onClick={onOverlayClick}
      >
        <div
          onClick={ignoreClick}
          className={styles.menuContent}
        >
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <NavLink
                to={home.route}
                className={styles.link}
                onClick={toggleShowSideNav}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to={about.route}
                className={styles.link}
                onClick={toggleShowSideNav}
              >
                About
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to={contact.route}
                className={styles.link}
                onClick={toggleShowSideNav}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
