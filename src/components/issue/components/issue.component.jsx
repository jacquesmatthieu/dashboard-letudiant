import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Grid, ListItem, Chip, CardHeader, CardContent, ListItemText } from '@material-ui/core';
import axios from 'axios';
import config from '../../../config/config';

const Badge = styled.div`
  display: block;
  width: 100%;
`;

class Issue extends Component {
  constructor(props) {
    super(props)

    this.state = {
      issuesList: [],    
    };
  };

  componentDidMount = () => {
    axios.get(config.path + '/issues', { 
      headers: {
        'Private-Token': config.privateToken
      }
    })
    .then((res) => {
      this.setState({ issuesList: res.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { issuesList } = this.state;

    return (
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Liste des Issues ouvertes" />
          <CardContent>
            {issuesList.map(issue => (
              <ListItem key={issue.id}>
                <ListItemText primary={issue.title} />
                <Badge>
                  {issue.labels.map((label, i) => (
                    <Chip key={label+i} label={label} color="default" />
                  ))}
                </Badge>
              </ListItem>
            ))}
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default Issue;

