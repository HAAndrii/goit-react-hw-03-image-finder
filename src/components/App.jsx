import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';

export default class App extends Component {
  state = {
    value: '',
  };

  onSubmit = value => {
    this.setState(value);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
      </div>
    );
  }
}
