import React,{ useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import { appConfig } from '../services/config';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import Copyright from '../Copyright'
import useStyles from '../Loginpage/Css_Signup'

const SignUp = (props) => {
  
 const classes = useStyles();

 var [nameValue, setNameValue] = useState("");
 var [emailValue, setEmailValue] = useState("");
 var [passwordValue, setPasswordValue] = useState("");
 const [error] =useState(false);

var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
 const signupUser =() =>{
    axios.post(`${appConfig.apiURL}/auth/local/register`, {
      username: nameValue,
      email: emailValue,
      password: passwordValue,
    })
    .then(response => {
      console.log('response !'+response.status.toString);

      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);

      localStorage.setItem('token', response.data.jwt)
      props.history.push({pathname: '/home'});

    })
    .catch(error => {

      console.log('An error occurred:', error.response);
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="User name"
                autoFocus
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          {!pattern.test(emailValue) && emailValue !==0?  <Alert severity="warning">Enter your email'email@example.com"</Alert>:''}
          { error?  <Alert severity="error">Please verify mail or password!</Alert>:''}
          <Button
          disabled={
            emailValue.length === 0 || passwordValue.length === 0 || emailValue.length === 0
          }
            fullWidth
            variant="contained"
            color="primary"
            onClick={() =>
              signupUser()
        }
          >
            Sign Up
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={10}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default SignUp; 