import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AlignItemsList from './modules/AlignItemsList';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 360,
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const Articles = (props) => {
  return (
    <div>
      <h1>Last articles</h1>
      <p>
        Juan Jose Guerrero Cerezuela, for short Juanjo Cerezuela, is a spaniard
        living in the UK
        <AlignItemsList></AlignItemsList>
      </p>
    </div>
  );
};

export default Articles;
