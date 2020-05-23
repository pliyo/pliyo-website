import React from 'react';
import ShorinjiKempo from '../images/pliyoshorinjikyoto.jpg';

const Shorinji = (props) => {
  return (
    <div>
      <h1>Shorinji Kempo</h1>
      <p>I'm currently a 3rd dan and I have been practising for 14 years.</p>
      <p>
        <br />
        Started my journey with my sensei{' '}
        <a href="https://shorinjikempoalmeria.com/2008/12/31/86/">
          Carlos Perals
        </a>{' '}
        (4th dan) in{' '}
        <b>
          <a href="https://shorinjikempoalmeria.com/">Almeria branch.</a>
        </b>
        <br />
        In 2013 I came to London and after stopping for two years to fully focus
        on my career I continued practising in{' '}
        <b>
          <a href="http://ukskf.org/where-and-when/shorinji-kempo-west-london/">
            Acton branch
          </a>
        </b>
        , with sensei Jonny Daymond (4th dan), where I'm actively help as an
        assistant branch master.
      </p>
      <p>
        My goal is to go to Japan at least once a year to visit my sensei
        Morikawa Kazuhito (7th dan) in Kyoto.
      </p>
      <p>
        In total I have lived in Japan for 6 months. Here you can see me with
        some of my friends from Rakuto Doin, Kyoto.
      </p>
      <img
        src={ShorinjiKempo}
        alt="Juanjo in Rakuto Doin practising Shorinji Kempo"
      />
      ;
    </div>
  );
};

export default Shorinji;
