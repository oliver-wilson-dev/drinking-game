import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import cn from 'classnames';
import axios from 'axios';
import Page from '../Page';
import styles from './LobbyPage.module.css';
import routes from '../../routes';

const LobbyPage = ({ players }) => {
  const { id } = useParams();

  useEffect(() => {
    console.log('Creating a game for the following players', ...players);

    axios.post(`${window.location.origin}/create-game`, {
      partyID: id,
    });
  }, [players, id]);

  return (
    <Page className={styles.page}>
      <h1>
        Your party ID is:
        <br />
        {id}
      </h1>
      <p className={styles.text}>
        If your friends would like to see the questions on their device too
        then they can either:
      </p>
      <ul className={cn(styles.list, styles.text)}>
        <li>enter the party ID at the home page</li>
        <li>scan the QR code</li>
      </ul>
      <div className={styles.ctaContainer}>
        <QRCode
          className={styles.qrCode}
          value={window.location.href}
          renderAs="svg"
          level="Q"
        />
        <Link
          to={`${routes.game.route}/${id}`}
          className={styles.playBtn}
          type="button"
        >
          Let&apos;s play!
        </Link>
      </div>
    </Page>
  );
};

export default LobbyPage;
