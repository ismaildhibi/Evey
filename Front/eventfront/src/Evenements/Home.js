import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TodayIcon from '@material-ui/icons/Today';
import { fetchEvents } from '../services/api';
import { appConfig } from '../services/config';
import Copyright from '../Copyright'
import useStyles from '../Evenements/Css_Home'

export default function Album(props) {

  const  [card,setCards] = useState([])
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEvents();
        setCards(data);
        console.log(data);
      } catch (error) {
        console.log('An error occurred:', error.response);
      }
    };
    
    fetchData();
  }, []);


  const sendEvent = (event) => {

    if (localStorage.getItem('token') === null) {
      console.log("Not logged in  .. ");
    
      props.history.push({pathname: '/SignIn'});

    }else{
      console.log("logged in ;D .. ");
      console.log("data .. "+ event.id);
      props.history.push({
        pathname: '/DescriptionEvent/'+event.id,
        data: event.id
      });
    };
}

  return (
    
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Evey Technologies
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            La solution digitale 360° de gestion d'événements
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                Gérez votre événement , Engagez votre audience et Valorisez vos données
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {card.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                      style={{height: 70, paddingTop: '56.25%'}}
                      image={appConfig.apiURL + card.Image.url}
                     title= {card.Nom} 
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.Nom}    
                    </Typography>
                    <Typography>
                     <LocationOnIcon />{card.Lieu} 
                    </Typography>
                    <Typography>
                    <TodayIcon /> {card.Date}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" type="submit" 
                    onClick={() => sendEvent(card)}          
                    >
                      View
                    </Button>
                    <Button size="small" color="primary">
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
             Email: Evey.technologies@gmail.com    
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
             Phone: +216 99.672.762         
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );

}