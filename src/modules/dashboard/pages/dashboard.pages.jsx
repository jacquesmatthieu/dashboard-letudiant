import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Layout from '../../layout/pages/layout.component';
// import ApplicationBar from '../../appBar/components/appBar.component';
import Aside from '../../aside/components/aside.component';
import IssueCount from '../../issue/components/issueCount.component';
import Commit from '../../commit/components/commit.component';
import MergeRequestChart from '../../mergeRequest/components/mergeRequestChart.component';
import ContinuousDevelopment from '../../continuousDevelopment/components/continuousDevelopmentList.component';

const Wrapper = styled.div`
  display: flex;
  width: calc(100% - 56px);
  margin-left: 56px;
`;

const Container = styled.div`
  width: calc(100% - 56px);
  padding: 40px;
  display: flex; 
  flex-direction: row; 
  flex-wrap: wrap;
`;

class Dashboard extends Component {
  render() {
    return (
      <Layout>
        {/* <ApplicationBar /> */}
        <Aside />
        <Wrapper>
          <Container>
            <IssueCount />
            <Commit />
            <MergeRequestChart />
            <ContinuousDevelopment />
            {/* <Grid container spacing={8}>
              <IssueCount />
              <Commit />
              <MergeRequestChart />
              <ContinuousDevelopment />
            </Grid> */}
          </Container>
        </Wrapper>
      </Layout>
     );
  }
}
 
export default Dashboard;