import React, { Component } from 'react';
import Earth from './earth';
import { Title, Wrapper } from './style'
import Globalcss from './global';

class App extends Component {
  render() {
    return (
      <div>
        <Globalcss />
        {/* <Title>
          <Wrapper>
            Welcome
          </Wrapper>
        </Title> */}
        <Earth></Earth>
      </div>
    );
  }
}

export default App;
