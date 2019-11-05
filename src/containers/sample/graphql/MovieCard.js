import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import Rating from '@material-ui/lab/Rating';
import Skeleton from '@material-ui/lab/Skeleton';

import LazyLoad from 'react-lazy-load';

const imgWidth = 230;
const imgHeight = 345;

const useStyles = makeStyles(theme => ({
  card: {
    width: imgWidth + theme.spacing(4),
    padding: theme.spacing(2),
  },
  divider: {
    height: theme.spacing(1)
  },
  cardContent: {
    background: '#EFF6FF',
    padding: theme.spacing(1),
  },
  year: {
    width: '100%',
  },
  
  // summary: {
  //   height: 60,
  //   overflow: 'hidden',
  //   display: '-webkit-box',
  //   WebkitLineClamp: 3,
  //   WebkitBoxOrient: 'vertical',
  // }
}));

const MovieCard = ({ movie }) => {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  const history = useHistory();

  const onClickCard = (e) => {
    if (movie) {
      history.push(`/sample/graphql/detail/${movie.id}`);
    }
  }

  return (
    <Card className={classes.card} elevation={8}>
      <CardActionArea onClick={onClickCard}>
        <LazyLoad width={imgWidth} height={imgHeight} once>
          { movie ?
            <Fade in={checked}>
              <CardMedia
                component="img"
                image={movie.medium_cover_image}
                title={movie.title}
                onLoad={()=>setChecked(true)}
              />
            </Fade> :
            <Skeleton variant="rect" width="100%" height="100%" />
          }
        </LazyLoad>
        <div className={classes.divider} />
        <CardContent className={classes.cardContent}>
          { movie ?
            <>
              <Typography noWrap variant="subtitle1">
                {movie.title}
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography variant="subtitle2" className={classes.year}>
                  {movie.year}
                </Typography>
                <Rating value={movie.rating/2} precision={0.05} size='small' readOnly />
              </Box>
            </> :
            <>
              <Skeleton />
              <Skeleton />
            </>
          }
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MovieCard;