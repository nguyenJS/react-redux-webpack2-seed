import React, { Component } from 'react';
import List from './list/List';

export default class App extends Component {
  render() {
    return (
    <div>
      <h2 id="heading">Premier League Teams</h2>
      <List />
    </div>
    );
  }
}

