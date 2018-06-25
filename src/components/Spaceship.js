// Code The Spaceship Component Here;
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Spaceship extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
      <h3>{this.props.name}</h3>
        <p>Speed: {this.props.speed}</p>
        <p>Has rockets? {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship
