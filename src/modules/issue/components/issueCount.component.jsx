import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from '../../../config/config';
import theme from '../../../config/theme';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import BugIcon from '@material-ui/icons/BugReport';

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

const MainCardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  position: absolute;
  background: ${theme.green.greenBase};
  top: -30px;
  left: 30px;
  color: #fff;
`;

class IssueCount extends Component {
  constructor(props) {
    super(props)

    this.state = {
      issueCount: [],
    };
  };

  componentDidMount = () => {
    axios.get(config.path + '/issues', { 
      headers: {
        'Private-Token': config.privateToken
      }
    })
    .then((res) => {
      this.setState({ issueCount: res.data.length });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { issueCount } = this.state;

    return (
      <Grid item xs={4}>
        <MainCard>
          <MainCardIcon>
            <BugIcon />
          </MainCardIcon>
          <CardContent>
            <Typography color="textSecondary" align="right" >
              Nombre total d'issues
            </Typography>
            <Typography variant="h3" align="right" >
              {issueCount} issues
            </Typography>
          </CardContent>
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

export default IssueCount;


