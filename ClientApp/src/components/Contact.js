import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = (props) => {
  return (
    <div>
      <p>
        Find me in: <br />
        <a href="https://twitter.com/PliyoSan">
          <TwitterIcon />
        </a>
        <br />
        <a href="instagram.com/pliyosan">
          <InstagramIcon />
        </a>
        <br />
        <a href="https://github.com/pliyo">
          <GitHubIcon />
        </a>
      </p>
    </div>
  );
};

export default Contact;
