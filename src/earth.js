import React, { Component } from 'react';
import { ImgContainer } from './style'
import myImage from '../src/assets/earth.jpg'

class Earth extends Component {
  render() {
    return (
      <ImgContainer>
        <img src={myImage} />
      </ImgContainer>
    );
  }
}

export default Earth;