import React, { Component } from 'react';
import { Grid, Card, CardContent, CardHeader, ListItem, ListItemText } from '@material-ui/core';
import axios from 'axios';
import config from '../../../config/config';
import OnlineStatus from '../../status/components/online.component';
import CancelStatus from '../../status/components/cancel.component';
import PendingStatus from '../../status/components/pending.component';
import SkippedStatus from '../../status/components/skipped.component';

class ContinuousDevelopment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pipelineList: [],    
    };
  };

  componentDidMount = () => {
    axios.get(config.path + '/pipelines', { 
      headers: {
        'Private-Token': config.privateToken
      }
    })
    .then((res) => {
      this.setState({ pipelineList: res.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    const { pipelineList } = this.state;
    console.log(pipelineList);
    
    return (
      <Grid item xs={4}>
        <Card>
          <CardHeader title="CI/CD" />
          <CardContent>
            {pipelineList.map(pipeline => (
              <ListItem key={pipeline.id}>
                {(() => {
                  switch(pipeline.status) {
                    case 'failed':
                      return <CancelStatus />
                    case 'pending':
                      return <PendingStatus />
                    case 'success':
                      return <OnlineStatus />
                    default:
                      return <SkippedStatus />
                      break;
                  }
                })()}
                <ListItemText primary={pipeline.ref} />
              </ListItem>
            ))}
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default ContinuousDevelopment;