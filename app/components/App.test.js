import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App Component', () => {
  it('should render the component', () => {
    // when
    const wrapper = shallow(
        <App />
    );
    // then
    expect(wrapper.root.node).toMatchSnapshot();
  });
});

