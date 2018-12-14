import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from '../../../config/config';
import theme from '../../../config/theme';
import { Grid, Card, CardContent, ListItem, ListItemText, Typography, MenuList } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Autorenew';
import OnlineStatus from '../../status/components/online.component';
import CancelStatus from '../../status/components/cancel.component';
import PendingStatus from '../../status/components/pending.component';
import SkippedStatus from '../../status/components/skipped.component';

const MainCard = styled(Card)`
  overflow: initial !important;
  position: relative;
`;

const MainCardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  position: absolute;
  background: ${theme.blue.blueBase};
  top: -30px;
  left: 30px;
  color: #fff;
`;

const List = styled(MenuList)`
  max-height: 210px;
  overflow-y: scroll;
`;

const CardFooter = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  p {
    margin-bottom: 0;
  }
`;

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
        <MainCard>
          <MainCardIcon>
            <RefreshIcon />
          </MainCardIcon>
          <CardContent>
            <Typography color="textSecondary" align="right" >
              CI/CD
            </Typography>
            <List>
              {pipelineList.slice(0, 5).map(pipeline => (
                <ListItem key={pipeline.id}>
                  {(() => {
                    switch(pipeline.status) {
                      case 'canceled':
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
            </List>
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

export default ContinuousDevelopment;