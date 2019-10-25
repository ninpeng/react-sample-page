import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    width: 230+theme.spacing(4),
    padding: theme.spacing(2),
  },
  media: {
    width: 230,
    height: 345,
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
  const [showSummary, setShowSummary] = useState(false);
  const classes = useStyles();

  const onClickCard = (e) => {
    setShowSummary((state) => !state);
  }

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={onClickCard}>
        { showSummary ?
        <CardContent>
          <Typography noWrap variant="subtitle1">
            Summary
          </Typography>
          <Typography className={classes.summary} variant="body2" color="textSecondary" component="p">
            {movie.summary}
          </Typography>
        </CardContent>
        :
        <>
          <CardMedia
            component="img"
            width={230}
            height={345}
            image={movie.medium_cover_image}
            title={movie.title}
          />
          <CardContent>
            <Typography noWrap variant="subtitle1">
              {movie.title}
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="subtitle2" className={classes.year}>
                {movie.year}
              </Typography>
              <Rating value={movie.rating/2} precision={0.05} size='small' readOnly />
            </Box>
          </CardContent>
        </>
        }
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;