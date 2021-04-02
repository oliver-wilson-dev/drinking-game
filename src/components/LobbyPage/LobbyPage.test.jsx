import React from 'react';
import { shallow } from 'enzyme';
import LobbyPage from './LobbyPage';

jest.mock('../Page', () => {
  const Page = (children) => <div>{children}</div>;

  return Page;
});

const render = () => shallow(<LobbyPage />);

it('renders correctly', () => {
  expect(render()).toMatchSnapshot();
});
