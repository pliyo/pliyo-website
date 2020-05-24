import React from 'react';
import Emoji from './Emoji';
import PliyoHat from '../images/pliyo.jpg';

const imageStyle = {
  height: '100%',
  width: '100%',
};

const intro = (
  <div>
    <h1>Ahoy!</h1>
    <p>
      I'm Juan Jose Guerrero Cerezuela, for short Juanjo Cerezuela, although my
      friends call me Pliyo [<i>pli-yo</i>] which is the nickname I have been
      using all my life.
      <br />
      I'm a remote software engineer passionate about building software, poetry
      and Shorinji Kempo (a japanese martial art).
    </p>
    <img
      src={PliyoHat}
      alt="pliyo wearing a cowboy hat with coney island as a background"
      style={imageStyle}
    />
    <br />
    <br />
    <div>
      <p>
        Currently I'm a <b>Senior Software Engineer</b> at{' '}
        <b>
          <a href="https://insurwave.com/">Insurwave</a>
        </b>{' '}
        <Emoji symbol="🚀" label="rocket" />
        <br />
        <br /> Previously I have worked at <b>Guestline</b>, <b>ASOS</b> and{' '}
        <b>Ve Interactive</b>
        <br />I have handled team lead roles and software engineering roles. My
        main drive is to help make the people around me as efficient as
        possible. To build bridges between teams and applications so they can
        communicate more efficiently. I'm keen on DevOps culture. Recently
        involved in the speaker scene.
      </p>
      <p>
        Outside of my achievements, I'm a person trying to make a better world
        by teaching Shorinji Kempo to foster individuals with confidence in
        themselves, a kind listener, a patient friend that probably uses sarcasm
        way too much, a lifelong learner, an aspiring poet that knows that word
        have the power to lead the change we want to see in the world.
      </p>
    </div>
    <h6>I would love to hear from you! Contact me in any social network</h6>
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
