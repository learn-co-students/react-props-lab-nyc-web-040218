import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

const speed = 3;
const rockets = true;

ReactDOM.render(
  <Spaceship
    name="Millennium Falcon"
    speed={speed}
    hasRockets={rockets}
  />,
  document.getElementById('global')
);
