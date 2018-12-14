
import React, { Component } from 'react';
import { Button, Paper } from '@material-ui/core';


class Login extends Component {
  render() {
    return (
      <Paper>
        <Button variant="contained" color="primary">
          Se connecter
        </Button>
      </Paper>
      
    );
  }
}

export default Login;
