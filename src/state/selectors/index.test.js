import { getMessage, getTheme } from '.';

describe('getMessage', () => {
  it('returns the message property in state', () => {
    const mockMessage = Symbol('test-message');
    expect(getMessage({ state: { message: mockMessage } })).toEqual(
      mockMessage
    );
  });
});

describe('getTheme', () => {
  it('returns the message property in state', () => {
    const mockTheme = Symbol('test-theme');
    expect(getTheme({ state: { theme: mockTheme } })).toEqual(
      mockTheme
    );
  });
});
