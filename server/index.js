const express = require('express');
const path = require('path');
const compression = require('compression');
const { DEFAULT_PORT, ONE_HOUR_MS } = require('./constants');
const logAppRunning = require('./logAppRunning');

const app = express();

const pathToBuild = path.join(__dirname, '../build');

// compress all responses
app.use(compression());

app.use(express.static(pathToBuild, { maxAge: ONE_HOUR_MS }));

app.get('/*', (req, res) => {
  const pathToIndex = path.join(pathToBuild, 'index.html');

  res.set('Content-Type', 'text/html');
  res.set('Cache-Control', `public, max-age=${ONE_HOUR_MS}`);

  res.sendFile(pathToIndex);
});

const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, logAppRunning({ PORT }));
