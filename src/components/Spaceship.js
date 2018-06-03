// Code The Spaceship Component Here
import React, {Component} from 'react';

class Spaceship extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <small>{this.props.speed}</small>
        <small>{this.props.hasRockets}</small>
        <small>{this.props.colors}</small>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ["black", "red"]
}

export default Spaceship;
