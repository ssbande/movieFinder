import React from 'react';
import { shallow } from 'enzyme';
import { makeData } from '../state/selectors.test';

import { Home } from './Home';

const setup = () => ({
  props: {
    filter: 'all',
    movies: makeData('movie'),
    shows: makeData('show'),
    artists: makeData('artist'),
    showStart: false,
    initMenu: 'movies',
    handleClick: jest.fn(),
    availableMenus: [[
      'movies',
      {
        category: 'movie',
        route: 'movies',
        label: 'Movies',
        order: 1,
        successType: 'MOVIE_SUCCESS'
      }
    ]]
  }
})

describe('Home page tests', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<Home {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})