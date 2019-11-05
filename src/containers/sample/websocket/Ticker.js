import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const Ticker = ({ option, ticker }) => {
  const { value, label } = option;
  const data = ticker[value];
  
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card elevation={8}>
        <CardContent>
          <Typography variant="h4">{label}</Typography>
          { data && 
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography component="span" variant="subtitle1">
                      {"시작가 : "}
                    </Typography>
                  }
                  secondary={
                    <Typography component="span" variant="subtitle2">
                      {formatNumber(data.opening_price)} 원
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography component="span" variant="subtitle1" color="secondary">
                      {"고가 : "}
                    </Typography>
                  }
                  secondary={
                    <Typography component="span" variant="subtitle2" color="secondary">
                      {formatNumber(data.high_price)} 원
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography component="span" variant="subtitle1" color="primary">
                      {"저가 : "}
                    </Typography>
                  }
                  secondary={
                    <Typography component="span" variant="subtitle2" color="primary">
                      {formatNumber(data.low_price)} 원
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography component="span" variant="subtitle1">
                      {"현재가 : "}
                    </Typography>
                  }
                  secondary={
                    <Typography component="span" variant="subtitle2">
                      {formatNumber(data.trade_price)} 원
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography component="span" variant="subtitle1" color={data.change==='RISE' ? 'secondary' : data.change==='FALL' ? 'primary' : ''}>
                      {"등락폭 : "}
                    </Typography>
                  }
                  secondary={
                    <Typography component="span" variant="subtitle2" color={data.change==='RISE' ? 'secondary' : data.change==='FALL' ? 'primary' : ''}>
                      {formatNumber(data.signed_change_price)} 원 ({data.signed_change_rate.toFixed(2)}%)
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography component="span" variant="subtitle1">
                      {"업데이트 : "}
                    </Typography>
                  }
                  secondary={
                    <Typography component="span" variant="subtitle2">
                      {new Date(data.timestamp).toLocaleTimeString()}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          }
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Ticker;