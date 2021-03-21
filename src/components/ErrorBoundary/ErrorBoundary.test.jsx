import React from 'react';
import { mount } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

jest.mock('./assets/error.svg', () => {
  const ErrorIcon = () => null;

  return ErrorIcon;
});

const ChildNoError = () => <h1>Default Child</h1>;

const render = ({ child: Child = ChildNoError } =
{ children: ChildNoError }) => mount(
  <ErrorBoundary>
    <Child />
  </ErrorBoundary>
);

const originalConsole = console;

describe('ErrorBoundary', () => {
  beforeAll(() => {
    console.log = jest.fn();
    console.error = jest.fn();
  });

  afterAll(() => {
    console.log = originalConsole.log;
    console.error = originalConsole.log;
  });
  describe('when there are no errors thrown', () => {
    it('should render correctly', () => {
      expect(render()).toMatchSnapshot();
    });
  });

  describe('when there is an error thrown by a child', () => {
    const errMsg = 'oh no!';
    const ChildThrowsError = () => {
      throw new Error(errMsg);
      return <h1>Error!</h1>;
    };

    it('should render the error UI', () => {
      expect(render({ child: ChildThrowsError })).toMatchSnapshot();
    });

    it('should not render the children', () => {
      const children = render({ child: ChildThrowsError }).find(ChildThrowsError);

      expect(children.exists()).toBe(false);
    });
  });
});
