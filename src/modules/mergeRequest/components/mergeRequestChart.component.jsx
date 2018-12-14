import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from '../../../config/config';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

import DoughnutChart from './ doughnutChart.component';

const MainCard = styled(Card)`
  overflow: initial !important;
  position: relative;
`;

const CardFooter = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  p {
    margin-bottom: 0;
  }
`;

const MainCardChart = styled.div`
  display: flex;
  width: 90%;
  height: 75%;
  border-radius: 10px;
  position: absolute;
  background: #fff;
  top: -30px;
  left: 30px;
  color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const MainCardContent = styled(CardContent)`
  padding-top: 65% !important;
`;

class MergeRequestChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mergeRequest: [],
    };
  };

  componentDidMount = () => {
    axios.get(config.path + '/merge_requests', { 
      headers: {
        'Private-Token': config.privateToken
      }
    })
    .then((res) => {
      this.setState({ mergeRequest: res.data.length });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { mergeRequest } = this.state;
    console.log(mergeRequest);
    return (
      <Grid item xs={4}>
        <MainCard>
          <MainCardChart>
            <DoughnutChart />
          </MainCardChart>
          <MainCardContent>
            <Typography color="textSecondary" align="right" >
              Merge request
            </Typography>
            <Typography variant="h3" align="right" >
              {mergeRequest} opened
            </Typography>
          </MainCardContent>
          <CardFooter>
          <Typography paragraph align="center">
            Tracked from Gitlab
          </Typography>
          </CardFooter>
        </MainCard>
      </Grid>
    );
  }
}

export default MergeRequestChart;


