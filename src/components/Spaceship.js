import React from 'react';

export default class Spaceship extends React.Component {
    render() {
        const {name, speed, hasRockets, colors} = this.props;

        return (
            <div>
                <h1>{name}</h1>
                <p>
                    Speed: {speed}
                    Rockets: {hasRockets ? "Yes" : "No"}
                    Colors: {colors.join(', ')}
                </p>
            </div>
        )
    }
}

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
};