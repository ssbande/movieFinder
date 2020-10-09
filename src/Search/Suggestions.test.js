import React from 'react';
import { shallow } from 'enzyme';

import Suggestions from './Suggestions';

const setup = () => ({
  props: {
    history: { push: jest.fn() },
    location: { pathname: 'testPath' },
    setSubmitted: jest.fn(),
    showSuggestions: false,
    suggestions: [
      {
        id: 1001,
        poster_path: 'poster_path',
        profile_path: 'profile_path',
        title: 'title1',
        original_name: 'original_name',
        name: 'name1',
        release_date: '2020-10-08',
        first_air_date: 'first_air_date'
      },
      {
        id: 1002,
        poster_path: 'poster_path',
        profile_path: 'profile_path',
        title: 'title2',
        original_name: 'original_name',
        name: 'name2',
        release_date: '2020-10-08',
        first_air_date: 'first_air_date'
      },
      {
        id: 1003,
        poster_path: 'poster_path',
        profile_path: 'profile_path',
        title: 'title3',
        original_name: 'original_name',
        name: 'name3',
        release_date: '2020-10-08',
        first_air_date: 'first_air_date'
      }
    ],
    handleClick: jest.fn(),
  }
})

describe('Input field for search bar', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<Suggestions {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})