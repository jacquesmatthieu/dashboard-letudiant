import React, { Component } from 'react';
import styled from 'styled-components';
// import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const Wrapper = styled.div`
  height: 100vh;
`;

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      spacing: '12',
     }
  }

  render() {

    const { children } = this.props;

    return (
      <Wrapper>
        <Grid container spacing={8}>
          {children}
        </Grid>
      </Wrapper>     
     )
  }
}
 
 
export default Layout;