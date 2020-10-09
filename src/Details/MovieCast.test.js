import React from 'react';
import { shallow } from 'enzyme';

import MovieCast from './MovieCast';

const setup = () => ({
  props: {
    cast: [{
      id: 1001,
      profile_path: 'profile_path',
      name: 'name1',
      character: 'character1'
    }],
    handleCardClick: jest.fn(),
  }
})

describe('Movie Cast', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<MovieCast {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})