import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  marginBottom: theme.spacing(2),
}));

const DefaultSampleContent = ({ title, children }) => {
  return (
    <Grid direction="column" container alignItems="center">
      <Grid item xs={12}>
        {title && (
          <StyledPaper elevation={8}>
            <Typography align="center" variant="h4">
              {title}
            </Typography>
          </StyledPaper>
        )}
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default DefaultSampleContent;
