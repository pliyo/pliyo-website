import React from 'react';
import ShorinjiKempo from '../images/rsz_pliyoshorinjikyoto.jpg';

const Shorinji = (props) => {
  return (
    <div>
      <h1>Shorinji Kempo</h1>
      <p>I have been practising for 14 years</p>
      <img
        src={ShorinjiKempo}
        alt="Juanjo in Rakuto Doin practising Shorinji Kempo"
      />
      ;
    </div>
  );
};

export default Shorinji;
