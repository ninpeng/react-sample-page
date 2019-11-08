import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 480,
    
  }
}));

const HomeContainer = () => {
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center">
      <Card className={classes.card} elevation={10}>
        <CardHeader
          title="한옥마을"
          subheader="August 30, 2019"
        />
        <Fade in={checked} timeout={500}>
          <CardMedia
            component="img"
            image={require('images/home.jpg')}
            title="home image"
            onLoad={()=>setChecked(true)}
          />
        </Fade>
      </Card>
    </Box>
  )
}

export default HomeContainer;
