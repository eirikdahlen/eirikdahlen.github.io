import React, { Component } from 'react';

import Header from './header';
import Compendiums from './compendiums';
import Footer from './footer';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Compendiums/>
            <Footer/>
        </div>
    );
  }
}

export default App;
