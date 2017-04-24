import React, { Component } from 'react';
import styles from './detail.scss';

import { loadTeams } from '../../services/list/list.service';

export default class Detail extends Component {
  componentWillMount() {
    const { params: {id}  } = this.props;
    this.team = loadTeams().find(team => team.id === id);
  }

  render() {
    return (
        <div>
          <h2>{this.team.name}</h2>
          <ul>
            <li>
              <label className={styles.label}>Creation Year {this.team.creationYear}</label>
            </li>
          </ul>
        </div>
    );
  }
}

