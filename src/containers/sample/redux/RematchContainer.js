import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: 150,
    height: 50
  },
}));

const RematchContainer = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const classes = useStyles();
  
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <h1 align="center">The count is: {count}</h1>
      </Grid>
      <Grid container justify="center">
        <Button variant="contained" color="primary" className={classes.button} onClick={()=>dispatch.count.increment(1)}>Add 1</Button>
        <Button variant="contained" color="secondary" className={classes.button} onClick={()=>dispatch.count.incrementAsync(1)} >Add 1 Async</Button>
      </Grid>
    </Grid>
  )
}

export default RematchContainer;