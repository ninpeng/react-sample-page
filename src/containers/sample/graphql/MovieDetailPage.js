import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
// import Rating from '@material-ui/lab/Rating';
import Skeleton from '@material-ui/lab/Skeleton';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import LazyLoad from 'react-lazy-load';

import MovieDetailCast from './MovieDetailCast';
import MovieDetailImageGallery from './MovieDetailImageGallery';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
}));

const getMovieDetailQuery = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      imdb_code
      title
      year
      rating
      runtime
      genres
      description_full
      yt_trailer_code
      language
      medium_cover_image
      large_cover_image
      background_image
      medium_screenshot_image1
      medium_screenshot_image2
      medium_screenshot_image3
      large_screenshot_image1
      large_screenshot_image2
      large_screenshot_image3
      cast {
        name
        character_name
        url_small_image
      }
    }
  }
`;

const MovieDetailPage = ({ match }) => {
  const classes = useStyles();
  const [fade, setFade] = React.useState(false);
  const id = parseInt(match.params.id, 10);
  
  const { error, data } = useQuery(getMovieDetailQuery, { variables: { id } }); 
  const movie = useMemo(() => data && data.movie, [data]);
  
  return (
    error ?
    <p>{error.message}</p> :
    <Grid container className={classes.root} spacing={2} direction="column">
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={8}>
          <Grid container spacing={4}>
            <Grid item>
              <Box border={1} width={232} height={347} bgcolor="rgb(248, 248, 248)">
                <LazyLoad width={230} height={345} once>
                  { movie ?
                    <Fade in={fade}>
                      <img className={classes.img} alt={movie.title} src={movie.medium_cover_image} onLoad={()=>setFade(true)} />
                    </Fade> :
                    <Skeleton variant="rect" width={230} height={345} />
                  }
                </LazyLoad>
              </Box>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
              { movie ?
                <>
                  <Grid item>
                    <Typography className={classes.title} variant="h4" gutterBottom>
                      {movie.title}
                    </Typography>
                    <Typography variant="subtitle1">
                      연도 {movie.year}
                    </Typography>
                    <Typography variant="subtitle1">
                      장르 {movie.genres.join('۰')}
                    </Typography>
                    <Typography variant="subtitle1">
                      시간 {movie.runtime}분
                    </Typography>
                    <Typography variant="subtitle1">
                      언어 {movie.language}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      줄거리
                    </Typography>
                    <Typography variant="body2">
                      {movie.description_full}
                    </Typography>
                  </Grid>
                </> :
                <>
                  <Skeleton height={36} width={'80%'} />
                  <Skeleton height={22} width={'40%'} />
                  <Skeleton height={22} width={'40%'} />
                  <Skeleton height={22} width={'40%'} />
                  <Skeleton height={22} width={'40%'} />
                  <Skeleton height={80} width={'100%'} />
                </>
              }
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      { (movie && movie.cast) &&
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={8}>
            <MovieDetailCast movie={movie} />
          </Paper>
        </Grid>
      }
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={8}>
          <MovieDetailImageGallery movie={movie} />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default MovieDetailPage;