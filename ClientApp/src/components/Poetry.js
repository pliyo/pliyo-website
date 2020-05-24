import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LaLuz from '../images/laluz.png';
import LaVida from '../images/lavidapordelante.png';
import PliyoSenpai from '../images/pliyosenpai.jpg';
import PliyoBooks from '../images/pliyobooks.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export function LaVidaPorDelante() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={LaVida}
          title="La vida por delante"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            La vida por delante
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Obra antológica que recoge 60 poetas andaluces nacidos a partir de
            1980, dirigida pro Ana Alvea Sánchez y Jorge Díaz Martínez.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://www.edicionesenhuida.es/producto/lvpd/">
            Learn More
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

export function Banderin() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={PliyoSenpai}
          title="Banderines del Zaguan"
          alt="Banderines del Zaguan"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Invoco la tormenta
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Banderin con poemas de Pliyo Senpai
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="http://losbanderines.blogspot.com/search?updated-max=2013-01-28T13:58:00-08:00&max-results=499&start=17&by-date=false">
            Learn More
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
export function LaLuzMasBella() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={LaLuz}
          title="La luz mas bella"
          alt="La luz mas bella"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            La luz más bella
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Antología de jóvenes poetas almerienses. Coordinada por Martina
            Mateo Jiménez y Daniel J. García López.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://www.edicionesenhuida.es/producto/la-luz-mas-bella/">
            Learn More
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

const Poetry = (props) => {
  return (
    <div>
      <h1>Poetry</h1>
      <p>
        When I was back in Spain I used to write poetry in spanish.
        <br />I still do as a way of healing, I find poetry is a fantastic way
        to understand myself and unwind from the noise of routine, but I'm not
        planning on writing any book any time soon.
        <br />
        <img src={PliyoBooks} alt="Pliyo reading books in a library" />
        <br />
        These are some of the books I participated in the past:
      </p>

      <br />
      <br />
      <LaLuzMasBella></LaLuzMasBella>
      <br />
      <LaVidaPorDelante></LaVidaPorDelante>
      <br />
      <Banderin></Banderin>
    </div>
  );
};

export default Poetry;
