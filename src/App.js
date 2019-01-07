import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';

import AboutMe from './pages/AboutMe';
import Knowledges from './pages/Knowledges';
import Links from './pages/Links';

class App extends Component {
  render() {
    return (
      <ReactFullpage
        render={() => (
          <ReactFullpage.Wrapper>
            <AboutMe/>
            <Knowledges/>
            <Links/>
          </ReactFullpage.Wrapper>
        )}
      />
    );
  }
}

export default App;
