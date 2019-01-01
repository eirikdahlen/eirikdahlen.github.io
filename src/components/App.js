import React, { Component } from 'react';

import Header from './header';
import Compendiums from './compendiums';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Compendiums/>
        </div>
    );
  }
}

export default App;
