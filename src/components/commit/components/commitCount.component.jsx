import React, { Component } from 'react';
import axios from 'axios';
import config from '../../../config/config';
import { Grid, Card, CardContent, Typography, CardHeader } from '@material-ui/core';

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
        <Card>
          <CardHeader title="Nombre de commits" />
          <CardContent>
            <Typography variant="h3" align="center" >
              {commitList}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default CommitCount;


