import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Spaceship extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    }
    console.log(this.state);
  }

  render() {
    return(
      <div className="spaceship">
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors}</p>
      </div>
    );

  }
};

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;
