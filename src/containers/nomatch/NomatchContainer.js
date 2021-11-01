import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const PREFIX = 'NomatchContainer';

const classes = {
  paper: `${PREFIX}-paper`,
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  [`&.${classes.paper}`]: {
    padding: theme.spacing(3, 2),
  },
}));

const NomatchContainer = () => {
  return (
    <StyledPaper className={classes.paper}>
      <Typography align="center" variant="h3">
        No Match URL!
      </Typography>
    </StyledPaper>
  );
};

export default NomatchContainer;
