import React from 'react';
import { shallow } from 'enzyme';

import DataItem from './DataItem';

const setup = () => ({
  props: {
    item: {
      id: 1001,
      poster_path: 'poster_path',
      profile_path: 'profile_path',
      title: 'title1',
      original_title: 'original_title',
      original_name: 'original_name',
      name: 'name1',
      release_date: '2020-10-08',
      first_air_date: 'first_air_date',
      vote_count: 123
    },
    handleCardClick: jest.fn(),
  }
})

describe('data item', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<DataItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})