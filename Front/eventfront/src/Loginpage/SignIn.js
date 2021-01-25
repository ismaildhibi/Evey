import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import { appConfig } from '../services/config';
import Copyright from '../Copyright'
import useStyles from '../Loginpage/Css_Signin'

const SignIn = (props) => {

  const classes = useStyles(); 
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");
const [error,setError] =useState(false);
 const loginUser =() =>{
    axios
    .post(`${appConfig.apiURL}/auth/local`, {
      identifier:loginValue ,
      password: passwordValue,
    })
    .then(response => {
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      localStorage.setItem('token', response.data.jwt)
      props.history.push({pathname: '/home'});
    })
    .catch(error => {
      console.log('An error occurred:', error.response);
      setError(true)
    });
  }

  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  return (
     <Container component="main" maxWidth="xs">
       
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
          id="email"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          value={loginValue}
          onChange={e => setLoginValue(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
             id="password"
             InputProps={{
               classes: {
                 underline: classes.textFieldUnderline,
                 input: classes.textField,
               },
             }}
             value={passwordValue}
             onChange={e => setPasswordValue(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          {!pattern.test(loginValue) && loginValue !==0?  <Alert severity="warning">Enter your email 'email@example.com"</Alert>:''}
          { error?  <Alert severity="error">Please verify mail or password!</Alert>:''}


          <Button
            disabled={
                loginValue.length === 0 || passwordValue.length === 0
              }
            onClick={() =>
              loginUser()
            }
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
          >
            Sign In
          </Button>
         
          <Grid container>    
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href ="/SignUp"  variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        
      </div>
      
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container> 
 
  );
        }


export default SignIn