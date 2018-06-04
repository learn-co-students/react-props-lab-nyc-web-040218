// Code The Spaceship Component Here
import React, { Component } from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className='space-ship'>
        <h2>{this.props.name}</h2>
        <ul>{this.props.speed}</ul>
        <ul>{this.props.hasRockets}</ul>
        <ul>{this.props.colors}</ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;