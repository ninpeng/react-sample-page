import { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Fade from '@mui/material/Fade';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 480,
  },
}));

const HomeContainer = () => {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center">
      <Card className={classes.card} elevation={10}>
        <CardHeader title="한옥마을" subheader="August 30, 2019" />
        <Fade in={checked} timeout={500}>
          <CardMedia
            component="img"
            image={require('images/home.jpg').default}
            title="home image"
            onLoad={() => setChecked(true)}
          />
        </Fade>
      </Card>
    </Box>
  );
};

export default HomeContainer;
