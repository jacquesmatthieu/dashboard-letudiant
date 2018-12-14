import React, { Component } from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';


const Wrapper = styled(AppBar)``;

class ApplicationBar extends Component {

  render() {
    return (
      <Wrapper position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Dashboard Gitlab l'Etudiant
          </Typography>
        </Toolbar>
      </Wrapper>
    );
  }
}

export default ApplicationBar;