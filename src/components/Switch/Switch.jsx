import React from 'react';
import {
  Switch as ReactRouterSwitch,
  Route,
  Redirect
} from 'react-router-dom';
import generateId from '../../helpers/generateId';

import routes from '../../routes';

const {
  home, names, lobby, game
} = routes;

const Switch = () => (
  <ReactRouterSwitch>
    <Route exact path={home.route}>
      <home.component />
    </Route>
    <Route path={names.route}>
      <names.component />
    </Route>
    <Route path={`${game.route}/:${game.params.partyID}`}>
      <game.component />
    </Route>
    <Route path={`${lobby.route}/:${lobby.params.partyID}`}>
      <lobby.component />
    </Route>
    <Route exact path={lobby.route}>
      <Redirect to={`${lobby.route}/${generateId()}`} />
    </Route>
  </ReactRouterSwitch>
);

export default Switch;
