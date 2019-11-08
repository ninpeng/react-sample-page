import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3, 2)
  }
}));

const DefaultSampleContent = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="center" spacing={3}>
      <Grid item xs={12}>
      { title &&
        <Paper className={classes.paper} elevation={8}>
          <Typography align="center" variant="h4">
            {title}
          </Typography>
        </Paper>
      }
      </Grid>
      <Grid container item xs={12} justify="center">
        {children}
      </Grid>
    </Grid>
  )
}

export default DefaultSampleContent;
