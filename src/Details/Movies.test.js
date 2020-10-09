import React from 'react';
import { shallow } from 'enzyme';

import Movie from './Movies';

const setup = () => ({
  props: {
    getDetails: jest.fn(),
    history: { push: jest.fn() },
    category: 'movie',
    detailInfo: {
      id: 1001,
      profile_path: 'profile_path',
      title: 'title',
      overview: 'overview',
      genres: [{ name: 'genre1' }, { name: 'genre2' }, { name: 'genre3' }]
    }
  }
})

describe('Movies page tests', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<Movie {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})