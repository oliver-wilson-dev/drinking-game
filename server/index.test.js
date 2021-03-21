const { DEFAULT_PORT, ONE_HOUR_MS } = require('./constants');

const mockUse = jest.fn();
const mockGet = jest.fn();
const mockListen = jest.fn((port, cb) => cb());

jest.mock('express', () => () => ({
  use: mockUse,
  get: mockGet,
  listen: mockListen
}));

jest.mock('path', () => ({
  join: jest.fn(),
  resolve: jest.fn()
}));

jest.mock('./logAppRunning');

jest.mock('compression');

describe('server', () => {
  let logAppRunning;
  const mockCompressionMiddleware = Symbol('test-compression-middleware');
  const mockLogAppRunning = Symbol('test-log-app-running');

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();

    const express = require('express');
    const path = require('path');
    const compression = require('compression');

    path.join.mockImplementation((_, path) => path);
    path.resolve.mockImplementation((_, path) => path);
    express.static = jest.fn((path) => path);
    logAppRunning = require('./logAppRunning');
    logAppRunning.mockReturnValue(mockLogAppRunning);

    compression.mockReturnValue(mockCompressionMiddleware);
  });

  describe('app.use', () => {
    it('should use the compression middleware', () => {
      require('./index');
      expect(mockUse).toHaveBeenCalledWith(mockCompressionMiddleware);
    });
  });

  describe('app.get', () => {
    it('should call app.get with the correct path and a function', () => {
      require('./index');
      expect(mockGet).toHaveBeenCalledWith('/*', expect.any(Function));
    });

    describe('when calling the get callback', () => {
      it('should call res.sendFile with the path to the index file', () => {
        require('./index');
        const res = {
          sendFile: jest.fn(),
          set: jest.fn()
        };
        mockGet.mock.calls[0][1](undefined, res);

        expect(res.sendFile).toHaveBeenCalledWith('index.html');
      });

      it('should set the content type to html', () => {
        require('./index');
        const res = {
          sendFile: jest.fn(),
          set: jest.fn()
        };
        mockGet.mock.calls[0][1](undefined, res);

        expect(res.set).toHaveBeenCalledWith('Content-Type', 'text/html');
      });

      it('should call res.set with the correct cache header', () => {
        require('./index');
        const res = {
          sendFile: jest.fn(),
          set: jest.fn()
        };
        mockGet.mock.calls[0][1](undefined, res);

        expect(res.set).toHaveBeenCalledWith('Cache-Control', `public, max-age=${ONE_HOUR_MS}`);
      });
    });
  });

  describe('app.listen', () => {
    describe('when there is no env variable set', () => {
      it('should call app.listen with the DEFAULT_PORT', () => {
        require('./index');
        expect(mockListen).toHaveBeenCalledWith(DEFAULT_PORT, mockLogAppRunning);
      });

      it('should call logAppRunning', () => {
        require('./index');
        expect(logAppRunning).toHaveBeenCalledWith({ PORT: DEFAULT_PORT });
      });
    });

    describe('when the PORT environment variable has been set', () => {
      const mockPort = '9999';
      beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();

        const express = require('express');
        const path = require('path');

        path.join.mockImplementation((_, path) => path);
        express.static = jest.fn((path) => path);

        process.env.PORT = mockPort;
        logAppRunning = require('./logAppRunning');
        logAppRunning.mockReturnValue(mockLogAppRunning);
      });

      it('should call app.listen with the port provided by the environment variable', () => {
        require('./index');
        expect(mockListen).toHaveBeenCalledWith(mockPort, mockLogAppRunning);
      });

      it('should call logAppRunning', () => {
        require('./index');
        expect(logAppRunning).toHaveBeenCalledWith({ PORT: mockPort });
      });
    });
  });
});
