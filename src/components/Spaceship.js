// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <h2>Speed: {this.props.speed}</h2>
        <h2>Has Rockets: {this.props.hasRockets}</h2>
        <h2>Colors: {this.props.colors}</h2>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
