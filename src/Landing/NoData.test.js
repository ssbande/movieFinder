import React from 'react';
import { shallow } from 'enzyme';

import NoData from './NoData';

describe('NoData', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NoData />);
    expect(wrapper).toMatchSnapshot();
  })
})