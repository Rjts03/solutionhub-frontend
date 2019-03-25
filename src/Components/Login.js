import React, { useState } from 'react';
import { Paper, Button, TextField, InputAdornment, IconButton, withStyles, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const styles = theme => ({
  paper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'floralwhite',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    width: '40%',
  },
  button: {
    width: '40%',
    padding: '10px 16px',
    margin: '8px',
  }
});

function Login({ classes }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('');
  const [signUp, setSignUp] = useState(false);

  const register = () => {
    console.log('signed up');
  };

  const signIn = () => {
    console.log('signed in');
  }

  return (
    <Paper className={classes.paper}>
      <TextField
        id="outlined-simple"
        className={[classes.margin, classes.textField]}
        variant="outlined"
        placeholder="Username"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      {signUp &&
        <TextField
          id="outlined-simple"
          className={[classes.margin, classes.textField]}
          variant="outlined"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      }
      <TextField
        id="outlined-adornment-password"
        className={[classes.margin, classes.textField]}
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
        }}
      />
      <Button
        variant="contained"
        onClick={signUp ? register : signIn}
        color="primary"
        className={classes.button}
      >
        {signUp ? 'Sign up' : 'Sign in'}
      </Button>
      {!signUp && 
      <React.Fragment>
        <Typography>
          Don't have an account?
        </Typography>
        <Button
          variant="outlined"
          onClick={() => setSignUp(true)}
          color="secondary"
          className={classes.button}
        >
          Sign Up
        </Button>
      </React.Fragment>
      }
    </Paper>
  )
}
export default withStyles(styles)(Login);