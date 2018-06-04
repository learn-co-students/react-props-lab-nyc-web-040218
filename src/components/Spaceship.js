import React from 'react';
const name = "Millenium Falcon";
const speed = "75 parsecs";
const hasRockets = true;

class Spaceship extends React.Component {
    render() {
        return (
            <div>
                <h1>{name}</h1>
                <p>
                    {speed}<br>
                    Rockets: {hasRockets}<br>
                    Colors: {colors.join(', ')}
                </p>
            </div>
        )
    }
}

Spaceship.defaultProps = {
    colors: ['black', 'red'];
};

export default Spaceship;