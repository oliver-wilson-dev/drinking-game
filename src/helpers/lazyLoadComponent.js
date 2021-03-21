import { lazy } from 'react';

const lazyLoadComponent = ({ importFn, debounceMs = 1300 }) => lazy(() => Promise.all([
  importFn(),
  new Promise((resolve) => setTimeout(resolve, debounceMs))
]).then(([moduleExports]) => moduleExports));

export default lazyLoadComponent;
