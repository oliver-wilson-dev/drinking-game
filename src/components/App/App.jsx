import React, { Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import cn from 'classnames';

import Navigation from '../Navigation';
import Footer from '../Footer';
import LoadingSpinner from '../LoadingSpinner';
import Switch from '../Switch';

import styles from './App.module.css';
import themeStyles from '../../styles/theme.module.css';
import Fallback from '../Fallback';
import CookieDisclaimer from '../../containers/CookieDisclaimer';
import ErrorBoundary from '../ErrorBoundary';
import { LIGHT_THEME, DARK_THEME } from '../../styles/constants';

const App = ({ theme }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={cn({
      [themeStyles.light]: theme === LIGHT_THEME,
      [themeStyles.dark]: theme === DARK_THEME
    }, styles.App)}
    >
      <Router>
        <Navigation />
        <LoadingSpinner show={loading} />
        <Suspense fallback={<Fallback setLoading={setLoading} />}>
          <ErrorBoundary>
            <Switch />
          </ErrorBoundary>
        </Suspense>
        <CookieDisclaimer />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
