import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const PREFIX = 'DefaultSampleContent';

const classes = {
  paper: `${PREFIX}-paper`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.paper}`]: {
    padding: theme.spacing(3, 2),
    marginBottom: theme.spacing(2),
  },
}));

const DefaultSampleContent = ({ title, children }) => {
  return (
    <StyledGrid container justifyContent="center">
      <Grid item xs={12}>
        {title && (
          <Paper className={classes.paper} elevation={8}>
            <Typography align="center" variant="h4">
              {title}
            </Typography>
          </Paper>
        )}
      </Grid>
      {children}
    </StyledGrid>
  );
};

export default DefaultSampleContent;
