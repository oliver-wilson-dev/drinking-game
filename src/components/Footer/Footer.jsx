/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Footer.module.css';
import routes from '../../routes';
import { EMAIL_ADDRESS, GITHUB_PROFILE_URL, PHONE_NUMBER } from './constants';

const { home, about, contact } = routes;

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.columnContainer}>
      <div className={styles.column}>
        <h4 className={cn(styles.title, styles.logoPlaceholder)}>LOGO</h4>
      </div>
      <div className={styles.column}>
        <div className={styles.columnSection}>
          <h4 className={styles.title}>CONTACT</h4>
          <ul className={styles.contactList}>
            <li><a className={styles.email} href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a></li>
            <li><a className={styles.email} href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a></li>
          </ul>
        </div>
        <div className={styles.columnSection}>
          <h4 className={styles.title}>EXPLORE</h4>
          <ul className={styles.linksList}>
            <li className={styles.hover}>
              <Link className={styles.link} to={home.route}>Home</Link>
            </li>
            <li className={styles.hover}>
              <Link className={styles.link} to={about.route}>About</Link>
            </li>
            <li className={styles.hover}>
              <Link className={styles.link} to={contact.route}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.columnSection}>
          <h4 className={styles.title}>LICENCING</h4>
          <span className={styles.footerDisclaimerText}>
            Icons made by{' '}
            <a className={cn(styles.link, styles.hover)} href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
            {' '} from {' '}
            <a className={cn(styles.link, styles.hover)} href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </span>
        </div>
      </div>
    </div>
    <hr className={styles.horizontalRule} />
    <div className={styles.creditAuthorContainer}>
      <span className={cn(styles.footerDisclaimerText, styles.creditAuthor)}>
        The code for this website can be found on
        {' '}
        <a className={cn(styles.link, styles.hover)} href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer">github</a>
        .
      </span>
      <span
        className={cn(styles.footerDisclaimerText, styles.creditAuthor)}
      >©2021, Oliver Wilson
      </span>
    </div>
  </footer>
);

export default Footer;
