import { getMessage } from '.';

describe('getMessage', () => {
  it('returns the message property in state', () => {
    const mockMessage = Symbol('test-message');
    expect(getMessage({ state: { message: mockMessage } })).toEqual(
      mockMessage
    );
  });
});
