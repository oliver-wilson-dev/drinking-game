/* eslint-disable no-console */
import React from 'react';
import ErrorIcon from './assets/error.svg';
import styles from './ErrorBoundary.module.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    const {
      state: {
        error
      },
      props: {
        children
      }
    } = this;

    return error ? (
      <div className={styles.errorBoundary}>
        <h1>Something went wrong</h1>
        <ErrorIcon className={styles.icon} />
      </div>
    ) : children;
  }
}

export default ErrorBoundary;
