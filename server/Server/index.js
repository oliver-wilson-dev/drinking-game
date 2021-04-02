const express = require('express');

const app = express();
const httpServer = require('http').createServer(app);

const options = {
  cors: {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  }
};
const io = require('socket.io');

class Server {
  constructor() {
    this.httpServer = httpServer;
    this.io = io(httpServer, options);
    this.app = app;
  }
}

module.exports = new Server();
