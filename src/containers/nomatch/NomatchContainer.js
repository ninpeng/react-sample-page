import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2)
  }
}));

const NomatchContainer = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography align="center" variant="h3">
        No Match URL!
      </Typography>
    </Paper>
  )
}

export default NomatchContainer;
