import React from 'react';
import { shallow } from 'enzyme';

import List from './List';
import * as listService from '../../services/list/list.service';

describe('List Component', () => {
  it('should render the component', () => {
    // when
    listService.loadTeams = jest.fn().mockReturnValueOnce([{
      id: "team-1",
      name: "Manchester United",
      creationYear: 1890,
    }]);

    const wrapper = shallow(
        <List />
    );
    // then
    expect(wrapper.root.node).toMatchSnapshot();
  });
});

