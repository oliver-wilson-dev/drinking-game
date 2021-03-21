jest.mock('../helpers/lazyLoadComponent', () => ({ importFn }) => {
  importFn();
  const LazyLoadedComponent = () => null;

  return LazyLoadedComponent;
});

describe('routes', () => {
  it('should return the correct routes', () => {
    const routes = require('./index').default;

    expect(routes).toMatchSnapshot();
  });
});
