import ip from 'ip';
import logAppRunning from './logAppRunning';

jest.mock('chalk', () => ({
  blue: (text) => text,
  green: {
    underline: (text) => text
  },
}));

jest.mock('ip', () => ({
  address: jest.fn()
}));

describe('server', () => {
  const consoleLog = console.log;

  beforeAll(() => {
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = consoleLog;
  });

  beforeEach(() => {
    ip.address.mockReturnValue('mock-address');
  });

  it('should log the correct message', () => {
    const PORT = 1234;
    logAppRunning({ PORT });

    expect(console.log).toHaveBeenCalledWith(`
    App is listening on port 1234

    - Local: http://localhost:1234/

    - On Your Network: http://mock-address:1234/
`);
  });
});
