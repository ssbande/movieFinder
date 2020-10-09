import React from 'react';
import { shallow } from 'enzyme';

import MovieDetails from './MovieDetails';

const setup = () => ({
  props: {
    detailInfo: {
      id: 1001,
      profile_path: 'profile_path',
      title: 'title',
      overview: 'overview',
      genres: [{name: 'genre1'}, {name: 'genre2'}, {name: 'genre3'}]
    }
  }
})

describe('Movie Detail', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<MovieDetails {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})