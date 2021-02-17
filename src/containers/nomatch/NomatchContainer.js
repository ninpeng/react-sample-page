import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
