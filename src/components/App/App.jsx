import React, { Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import cn from 'classnames';

import Footer from '../Footer';
import LoadingSpinner from '../LoadingSpinner';
import Switch from '../Switch';

import styles from './App.module.css';
import themeStyles from '../../styles/theme.module.css';
import Fallback from '../Fallback';
import ErrorBoundary from '../ErrorBoundary';

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={cn(
      themeStyles.light,
      styles.App
    )}
    >
      <Router>
        <div className={styles.background}>
          <LoadingSpinner show={loading} />
          <Suspense fallback={<Fallback setLoading={setLoading} />}>
            <ErrorBoundary>
              <Switch />
            </ErrorBoundary>
          </Suspense>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
