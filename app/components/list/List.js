import React, { Component } from 'react';
import Team from './team/Team';

import { loadTeams } from '../../services/list/list.service';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.teams = [];
  }

  componentWillMount() {
    this.teams = loadTeams();
  }

  render() {
    const elements = this.teams.map(team => <Team key={team.id} team={team} />);
    return (
        <ul>{elements}</ul>
    );
  }
}

