import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const PREFIX = 'RematchContainer';

const classes = {
  button: `${PREFIX}-button`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.button}`]: {
    margin: theme.spacing(1),
    width: 150,
    height: 50,
  },
}));

const RematchContainer = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <StyledGrid container justifyContent="center">
      <Grid item xs={12}>
        <h1 align="center">The count is: {count}</h1>
      </Grid>
      <Grid container justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => dispatch.count.increment(1)}
        >
          Add 1
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => dispatch.count.incrementAsync(1)}
        >
          Add 1 Async
        </Button>
      </Grid>
    </StyledGrid>
  );
};

export default RematchContainer;
