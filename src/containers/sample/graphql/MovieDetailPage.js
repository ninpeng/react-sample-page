import { useState, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
// import Rating from '@mui/lab/Rating';
import Skeleton from '@mui/material/Skeleton';

import { gql, useQuery } from '@apollo/client';

import MovieDetailCast from './MovieDetailCast';
import MovieDetailImageGallery from './MovieDetailImageGallery';
import { useParams } from 'react-router-dom';

const PREFIX = 'MovieDetailPage';

const classes = {
  paper: `${PREFIX}-paper`,
  imgBox: `${PREFIX}-imgBox`,
  img: `${PREFIX}-img`,
  title: `${PREFIX}-title`,
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.paper}`]: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
  },

  [`& .${classes.imgBox}`]: {
    flexGrow: 0,
  },

  [`& .${classes.img}`]: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

  [`& .${classes.title}`]: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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

const MovieDetailPage = () => {
  const [fade, setFade] = useState(false);
  const { id } = useParams();

  const { error, data } = useQuery(getMovieDetailQuery, { variables: { id: parseInt(id, 10) } });
  const movie = useMemo(() => data && data.movie, [data]);

  return error ? (
    <p>{error.message}</p>
  ) : (
    <StyledGrid container spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={8}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Box border={1} width={232} height={347} bgcolor="rgb(248, 248, 248)">
                {movie ? (
                  <Fade in={fade}>
                    <img
                      className={classes.img}
                      alt={movie.title}
                      src={movie.medium_cover_image}
                      onLoad={() => setFade(true)}
                    />
                  </Fade>
                ) : (
                  <Skeleton variant="rectangular" width={230} height={345} />
                )}
              </Box>
            </Grid>
            <Grid container item xs={12} sm direction="column" spacing={1}>
              {movie ? (
                <>
                  <Grid item>
                    <Typography className={classes.title} variant="h4" gutterBottom>
                      {movie.title}
                    </Typography>
                    <Typography variant="subtitle1">연도 {movie.year}</Typography>
                    <Typography variant="subtitle1">장르 {movie.genres.join('۰')}</Typography>
                    {movie.runtime && (
                      <Typography variant="subtitle1">시간 {movie.runtime}분</Typography>
                    )}
                    <Typography variant="subtitle1">언어 {movie.language}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">줄거리</Typography>
                    <Typography variant="body2">{movie.description_full}</Typography>
                  </Grid>
                </>
              ) : (
                <Box width={300}>
                  <Skeleton height={60} />
                  <Skeleton height={24} width={'40%'} />
                  <Skeleton height={24} width={'40%'} />
                  <Skeleton height={24} width={'40%'} />
                  <Skeleton height={24} width={'40%'} />
                  <Skeleton height={130} />
                </Box>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {movie && movie.cast && (
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={8}>
            <MovieDetailCast movie={movie} />
          </Paper>
        </Grid>
      )}
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={8}>
          <MovieDetailImageGallery movie={movie} />
        </Paper>
      </Grid>
    </StyledGrid>
  );
};

export default MovieDetailPage;
