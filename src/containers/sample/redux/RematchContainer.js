import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const RematchContainer = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const classes = useStyles();
  
  return (
    <div>
      <h1>The count is: {count}</h1>
      <Button variant="contained" color="primary" className={classes.button} onClick={()=>dispatch.count.increment(1)}>Add 1</Button>
      <Button variant="contained" color="secondary" className={classes.button} onClick={()=>dispatch.count.incrementAsync(1)} >Add 1 Async</Button>
    </div>
  )
}

export default RematchContainer;