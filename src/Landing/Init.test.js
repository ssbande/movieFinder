import React from 'react';
import { shallow } from 'enzyme';

import Init from './Init';

describe('Init', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Init />);
    expect(wrapper).toMatchSnapshot();
  })
})