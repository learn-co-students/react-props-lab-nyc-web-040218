// Code The Spaceship Component Here
import React from 'react'
// BELOW IN FRONT OF CLASS (EXPORT DEFAULT)
class Spaceship extends React.Component {
  render() {
    console.log(this.props.name);
    return (
      <div id="name">{this.props.name}
        <div id="speed">{this.props.speed}</div>
        <div id="hasRockets">{this.props.hasRockets.toString()}</div>
        <div id="colors">{this.props.colors}</div>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship; // OR WHATS IN FRONT OF CLASS (BOTH WORK, ONLY NEED ONE)
