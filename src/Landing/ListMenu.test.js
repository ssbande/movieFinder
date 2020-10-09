import React from 'react';
import { shallow } from 'enzyme';

import ListMenu from './ListMenu';

const setup = () => ({
  props: {
    activeItem: 'movies',
    handleItemClick: jest.fn(),
    menus: [[
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

describe('List Menu tests', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<ListMenu {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})