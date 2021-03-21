import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './index.module.css';
import NotificationEmoji from './assets/notification.svg';
import TickEmoji from './assets/tick.svg';

const CookieDisclaimerMessage = ({ message, cookiesAccepted }) => {
  const [acknowledged, setAcknowledged] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const onTransitionEnd = () => {
    if (acknowledged) {
      setClosed(true);
    }
  };

  const acknowledgeBanner = () => {
    setAcknowledged(true);
    cookiesAccepted();
  };

  return !closed && (
    <div
      className={cn(styles.container, {
        [styles.loaded]: loaded && !acknowledged,
        [styles.closed]: acknowledged
      })}
      onTransitionEnd={onTransitionEnd}
    >
      <div className={styles.positionWrapper}>
        <NotificationEmoji className={cn(
          styles.notificationEmoji,
          styles.notificationElement
        )}
        />
        <span className={cn(
          styles.message,
          styles.text,
          styles.notificationElement,
        )}
        >
          {message}
        </span>
        <TickEmoji
          className={cn(styles.tick, styles.notificationElement)}
          onClick={acknowledgeBanner}
        />
      </div>
    </div>
  );
};

export default CookieDisclaimerMessage;
