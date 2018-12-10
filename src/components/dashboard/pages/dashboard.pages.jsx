import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Layout from '../../layout/pages/layout.component';
import Issue from '../../issue/components/issue.component';
import ApplicationBar from '../../appBar/components/appBar.component';
import Commit from '../../commit/components/commit.component';
import ContinuousDevelopment from '../../continuousDevelopment/components/continuousDevelopment.component';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 64px;
`;

const Container = styled.div`
  padding: 40px;
  height: 100vh;
`;

class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <ApplicationBar />
        <Wrapper>
          <Container>
            <Grid container spacing={8}>
              <Issue />
              <Commit />
              <ContinuousDevelopment />
            </Grid>
          </Container>
        </Wrapper>
      </Layout>
     );
  }
}
 
export default Dashboard;