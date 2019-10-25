import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2)
  }
}));

const HomeContainer = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography align="center" variant="h3">
        Hello, world!
      </Typography>
    </Paper>
  )
}

export default HomeContainer;
