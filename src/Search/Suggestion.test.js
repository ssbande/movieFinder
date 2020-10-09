import React from 'react';
import { shallow } from 'enzyme';

import Suggestion from './Suggestion';

const setup = () => ({
  props: {
    suggestion: {
      id: 1001,
      poster_path: 'poster_path',
      profile_path: 'profile_path',
      title: 'title',
      original_name: 'original_name',
      name: 'name',
      release_date: '2020-10-08',
      first_air_date: 'first_air_date'
    },
    handleClick: jest.fn(),
  }
})

describe('Input field for search bar', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<Suggestion {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})