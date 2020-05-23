import React from 'react';
import Emoji from './Emoji';
import PliyoHat from '../images/pliyo.jpg';

const intro = (
  <div>
    <h1>Welcome!</h1>
    <img
      src={PliyoHat}
      alt="pliyo wearing a cowboy hat with coney island as a background"
    />
    <div>
      <p>
        I'm a remote engineer passionate about building software, poetry and
        shorinji kempo (a japanese martial art).
        <br />
        <br />
        Currently I'm a <b>Lead Software Engineer</b> at{' '}
        <b>
          <a href="https://www.guestline.com/">Guestline</a>
        </b>
        <Emoji symbol="🚀" label="rocket" />
        <br />
        <br /> Previously I have worked at <b>ASOS</b> and <b>Ve Interactive</b>
      </p>
    </div>
  </div>
);

const Home = (props) => {
  return (
    <div id="Home">
      <div>{intro}</div>
    </div>
  );
};

export default Home;
