import React from 'react';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const Ticker = ({ option: { value, label }, ticker }) => {
  const data = ticker[value];

  return (
    <Grow in={!!data}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card elevation={8}>
          <CardContent>
            <Typography variant="h5" gutterBottom>{label}</Typography>
            { data && 
              <Grid container direction="column">
                <Grid item>
                  <Typography component="span" variant="subtitle1">
                    {"시작가 : "}
                  </Typography>
                  <Typography component="span" variant="subtitle2">
                    {formatNumber(data.opening_price)} 원
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="span" variant="subtitle1" color="secondary">
                    {"고가 : "}
                  </Typography>
                  <Typography component="span" variant="subtitle2" color="secondary">
                    {formatNumber(data.high_price)} 원
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="span" variant="subtitle1" color="primary">
                    {"저가 : "}
                  </Typography>
                  <Typography component="span" variant="subtitle2" color="primary">
                    {formatNumber(data.low_price)} 원
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="span" variant="subtitle1">
                    {"현재가 : "}
                  </Typography>
                  <Typography component="span" variant="subtitle2">
                    {formatNumber(data.trade_price)} 원
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="span" variant="subtitle1" color={data.change==='RISE' ? 'secondary' : data.change==='FALL' ? 'primary' : 'initial'}>
                    {"등락폭 : "}
                  </Typography>
                  <Typography component="span" variant="subtitle2" color={data.change==='RISE' ? 'secondary' : data.change==='FALL' ? 'primary' : 'initial'}>
                    {formatNumber(data.signed_change_price)} 원 ({(data.signed_change_rate*100).toFixed(2)}%)
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="span" variant="subtitle1">
                    {"업데이트 : "}
                  </Typography>
                  <Typography component="span" variant="subtitle2">
                    {new Date(data.timestamp).toLocaleTimeString()}
                  </Typography>
                </Grid>
              </Grid>
            }
          </CardContent>
        </Card>
      </Grid>
    </Grow>
  )
}

export default Ticker;