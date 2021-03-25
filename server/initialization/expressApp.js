const path = require('path');
const express = require('express');
const compression = require('compression');
const Server = require('../Server');
const { ONE_HOUR_MS } = require('../constants');
const GamesManager = require('../GamesManager');

const pathToBuild = path.join(__dirname, '../../build');

const expressApp = () => {
  const { app, io } = Server;

  // compress all responses
  app.use(compression());

  // Parse JSON bodies (as sent by API clients)
  app.use(express.json());

  app.use(express.static(pathToBuild, { maxAge: ONE_HOUR_MS }));

  app.get('/*', (req, res) => {
    const pathToIndex = path.join(pathToBuild, 'index.html');

    res.set('Content-Type', 'text/html');
    res.set('Cache-Control', `public, max-age=${ONE_HOUR_MS}`);

    res.sendFile(pathToIndex);
  });

  app.post('/create-game', ({ body: { partyID } }, res) => {
    const emitter = io.in(partyID);

    GamesManager.createGame({ partyID, emitter });

    res.status(200).send(`created new game with ID: ${partyID}`);
  });
};

module.exports = expressApp;
