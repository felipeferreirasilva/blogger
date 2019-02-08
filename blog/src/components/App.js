import React, { Component } from 'react';
import Nav from '../components/Nav'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
