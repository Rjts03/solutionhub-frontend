import React from 'react';
import { Paper, Button, withStyles } from '@material-ui/core';

const styles = theme => ({
  paper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
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

function Login({ classes, auth }) {

  const login = () => {
    auth.login();
  };

  const logout = () => {
    auth.logout();
  }

  return (
    <Paper className={classes.paper}>
      <Button
        variant="contained"
        color="primary"
        onClick={login}
        // disabled={logged}
      >
        Login
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={logout}
        // disabled={!logged}
      >
        Logout
      </Button>
    </Paper>
  )
}
export default withStyles(styles)(Login);