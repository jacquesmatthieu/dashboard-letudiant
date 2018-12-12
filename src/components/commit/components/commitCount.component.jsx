import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from '../../../config/config';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';

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

const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  position: absolute;
  background: #18272c;
  top: -15%;
  left: 30px;
  color: #fff;
`;

class CommitCount extends Component {
  constructor(props) {
    super(props)

    this.state = {
      commitList: [],
    };
  };

  componentDidMount = () => {
    axios.get(config.path + '/repository/commits/master', { 
      headers: {
        'Private-Token': config.privateToken
      }
    })
    .then((res) => {
      this.setState({ commitList: res.data.stats.total });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { commitList } = this.state;

    return (
      <Grid item xs={4}>
        <MainCard>
          <CardIcon>
            <CodeIcon />
          </CardIcon>
          <CardContent>
            <Typography color="textSecondary" align="right" >
              Nombre total de commits
            </Typography>
            <Typography variant="h3" align="right" >
              {commitList} commits
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

export default CommitCount;


