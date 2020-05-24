import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '1px',
    align: 'centre',
  },
});

const LabelBottomNavigation = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      onClick=""
      className={classes.root}
    >
      <a href="https://twitter.com/PliyoSan">
        <BottomNavigationAction
          label="@pliyosan"
          value="twitter"
          icon={<TwitterIcon />}
        />
      </a>
      <a href="https://www.instagram.com/pliyosan/">
        <BottomNavigationAction
          label="@pliyosan"
          value="instagram"
          icon={<InstagramIcon />}
        />
      </a>
      <a href="https://github.com/pliyo">
        <BottomNavigationAction
          label="@pliyo"
          value="github"
          icon={<GitHubIcon />}
        />
      </a>
      <a href="https://www.linkedin.com/in/pliyo/">
        <BottomNavigationAction
          label="@pliyo"
          value="linkedin"
          icon={<LinkedInIcon />}
        />
      </a>
      <a href="https://medium.com/@PliyoSan">
        <BottomNavigationAction
          label="@pliyo"
          value="medium"
          icon={<MenuBookIcon />}
        />
      </a>
    </BottomNavigation>
  );
};

export default LabelBottomNavigation;
