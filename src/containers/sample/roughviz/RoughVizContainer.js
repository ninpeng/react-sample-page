import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ChartComponent from './ChartComponent';

// const useStyles = makeStyles(theme => ({
//   select: {
//     width: 500,
//   },
// }));

const chartData = {
  labels: ['Strawberry', 'Choco', 'Vanilla', 'MintChoco', 'Curry'],
  values: [13, 21, 35, 22, 3]
}

export default function RoughVizContainer() {
  // const classes = useStyles();

  return (
    <Grid container justify="center" spacing={2}>
      <ChartComponent
        type="Bar"
        data={chartData}
      />

      <ChartComponent
        type="BarH"
        data={chartData}
      />

      <ChartComponent
        type="Donut"
        data={chartData}
      />

      <ChartComponent
        type="Pie"
        data={chartData}
      />
    </Grid>
  )
}