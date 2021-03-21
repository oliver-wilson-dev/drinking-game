import React from 'react';
import {
  Switch as ReactRouterSwitch,
  Route,
} from 'react-router-dom';

import routes from '../../routes';

const { home, about, contact } = routes;

const Switch = () => (
  <ReactRouterSwitch>
    <Route exact path={home.route}>
      <home.component />
    </Route>
    <Route path={about.route}>
      <about.component />
    </Route>
    <Route path={contact.route}>
      <contact.component />
    </Route>
  </ReactRouterSwitch>
);

export default Switch;
