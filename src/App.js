import React, { Component } from 'react';
import Earth from './earth';
import { Title, Wrapper } from './style'

class App extends Component {
  render() {
    return (
      <div>
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
