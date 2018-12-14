import React, { Component } from 'react';
import styled from 'styled-components';
// import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Theme from '../../../config/theme';

const Wrapper = styled.div`
  background: ${Theme.grey.greyBase};
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
        <Grid container>
          {children}
        </Grid>
      </Wrapper>     
     )
  }
}
 
 
export default Layout;