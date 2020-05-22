import React from 'react';
import Emoji from './Emoji';

const Home = (props) => {
  return (
    <div>
      <h1>
        Welcome to Pliyo's Spaceship! <Emoji symbol="🚀" label="rocket" />
      </h1>
    </div>
  );
};

export default Home;
