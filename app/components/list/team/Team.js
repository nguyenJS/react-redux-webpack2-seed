import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Team extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <Link to={`/detail/${this.props.team.id}`} title="Detail">
          {this.props.team.name}
        </Link>
      </li>
    );
  }
}

