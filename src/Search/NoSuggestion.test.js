import React from 'react';
import { shallow } from 'enzyme';

import NoSuggestion from './NoSuggestion';

describe('No Suggestions', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NoSuggestion />);
    expect(wrapper).toMatchSnapshot();
  })
})