// Code The Spaceship Component Here
import React, {Component} from 'react';

class Spaceship extends Component {
  render() {
    const {name, speed, hasRockets, colors} = this.props
    return (
      <div>
        <h1>Name {name}</h1>
        <h2>Speed {speed}</h2>
        <h4>Has Rockets? {hasRockets}</h4>
        <h4>Colors {colors}</h4>
      </div>
    );
  }
}

Spaceship.defaultProps= {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
