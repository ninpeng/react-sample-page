import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    marginBottom: theme.spacing(2)
  }
}));

const DefaultSampleContent = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
      { title &&
        <Paper className={classes.paper} elevation={8}>
          <Typography align="center" variant="h4">
            {title}
          </Typography>
        </Paper>
      }
      </Grid>
      {children}
    </Grid>
  );
}

export default DefaultSampleContent;
