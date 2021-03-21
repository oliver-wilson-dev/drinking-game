const chalk = require('chalk');
const ip = require('ip');

const logAppRunning = ({ PORT }) => {
  console.log(`
    App is listening on port ${chalk.blue(`${PORT}`)}\n
    - Local: ${chalk.green.underline(`http://localhost:${PORT}/`)}\n
    - On Your Network: ${chalk.green.underline(`http://${ip.address()}:${PORT}/`)}
`);
};

module.exports = logAppRunning;
