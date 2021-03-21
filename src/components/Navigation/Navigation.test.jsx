import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

jest.mock('./SideNav', () => {
  const SideNav = () => null;

  return SideNav;
});

jest.mock('./TopNav', () => {
  const TopNav = () => null;

  return TopNav;
});

const render = () => shallow(<Navigation />);

describe('Navigation', () => {
  it('renders correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
