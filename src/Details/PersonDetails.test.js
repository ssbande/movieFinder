import React from 'react';
import { shallow } from 'enzyme';

import PersonDetails from './PersonDetails';

const setup = () => ({
  props: {
    detailInfo: {
      id: 1001,
      profile_path: 'profile_path',
      name: 'name',
      biography: 'biography',
      place_of_birth: 'place_of_birth',
      birthday: '1990-01-01'
    }
  }
})

describe('Person Detail', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<PersonDetails {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})