import lazyLoadComponent from './lazyLoadComponent';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  lazy: (fn) => fn()
}));

describe('lazyLoadComponent', () => {
  const importFn = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call the import function', () => {
    lazyLoadComponent({ importFn });

    expect(importFn).toHaveBeenCalled();
  });

  it('should return the result of the import function', () => {
    expect.assertions(1);
    const importFnRes = Symbol('res');
    const importFn = jest.fn().mockResolvedValue(importFnRes);
    const pendingPromise = lazyLoadComponent({ importFn }).then((res) => {
      expect(res).toBe(importFnRes);
    });

    return pendingPromise;
  });

  it('should call setTimeout with the default timeout', () => {
    jest.useFakeTimers();

    lazyLoadComponent({ importFn });

    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1300);

    jest.useRealTimers();
  });

  describe('when called with a debounceMs', () => {
    it('should call setTimeout with the debounce time', () => {
      jest.useFakeTimers();

      const debounceMs = 100;

      lazyLoadComponent({ importFn, debounceMs });

      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), debounceMs);

      jest.useRealTimers();
    });
  });
});
