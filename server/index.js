const Server = require('./Server');
const { DEFAULT_PORT } = require('./constants');
const logAppRunning = require('./logAppRunning');
const { expressApp, websocket } = require('./initialization');

expressApp();
websocket();

const PORT = process.env.PORT || DEFAULT_PORT;

Server.httpServer.listen(PORT, () => logAppRunning({ PORT }));
