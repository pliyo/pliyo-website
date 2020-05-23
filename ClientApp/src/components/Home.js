import React from 'react';
import Emoji from './Emoji';

const Home = (props) => {
  return (
    <div>
      <h1>
        Welcome to Pliyo's Spaceship! <Emoji symbol="🚀" label="rocket" />
      </h1>
      <p>
        The whole idea started when I really wanted to organise my public
        profile...
      </p>
    </div>
  );
};

export default Home;
