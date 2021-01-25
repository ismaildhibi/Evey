import React,{useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from '../Evenements/CSSDescription'
import '../App.css';
import { appConfig } from '../services/config';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';

const DescriptionEvent = (props,match) =>{

  const [evnt,setEvent]=useState('')
    let Evenement = props.location.data;
    console.log("Evenement" , Evenement)
    console.log("props.location.data" , props.location.data)
   
    let { id } = useParams();
      console.log('id',id)
    axios
    .get(`${appConfig.apiURL}/events/`+ id )
    .then(res => {
      console.log(res.data)
      setEvent(res.data)
    })
    .catch(err => console.log(err));

    const classes = useStyles();

    if (props.location.data) {
        return (
         <div className={classes.root}>
              <Grid container justify="center" >  
                  <CardMedia
                      style={{height:50,width:800, paddingTop: '56.25%',borderRadius:'70px'}}
                      image={appConfig.apiURL + evnt.Image?.url}
                     title= {evnt.Nom} 
                  />
            </Grid>
           <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs zeroMinWidth>
                <Typography noWrap>{evnt.Nom}</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs>
                <Typography noWrap><strong>Date: </strong>{evnt.Date}</Typography>
                <Typography noWrap><strong>Lieu: </strong>{evnt.Lieu}</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
             
              <Grid item xs>
              <h3>Description:</h3>
                <Typography id='type' className={classes.typography}>  {evnt.Description}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
        )
      } else {
        return <span>Hi sir , you must go back and chose one of our events .. </span>;
      }

    
}

export default DescriptionEvent;
