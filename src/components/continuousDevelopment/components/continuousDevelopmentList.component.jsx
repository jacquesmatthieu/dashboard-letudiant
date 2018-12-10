import React from 'react';
import ContinuousDevelopment from './continuousDevelopment.component';
import { Card, Grid } from '@material-ui/core';

const ContinuousDevelopmentList = () => {
  return (
    <Grid item xs={4}>
      <Card>
        <ContinuousDevelopment />
      </Card>
    </Grid>
  );
};

export default ContinuousDevelopmentList;
