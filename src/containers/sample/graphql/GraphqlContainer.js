import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TablePagination from '@material-ui/core/TablePagination';
import { gql } from 'apollo-boost';

import { useQuery } from '@apollo/react-hooks';

import DefaultSampleContent from '../DefaultSampleContent';
import MovieCard from './MovieCard';

import './style.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const getMovieListQuery = gql`
  query getMovies($limit: Int!, $page: Int!, $rating: Float!) {
    movies(limit: $limit, page: $page, rating: $rating) {
      movie_count
      limit
      page_number
      movies {
        id
        imdb_code
        title
        year
        rating
        runtime
        genres
        summary
        yt_trailer_code
        language
        medium_cover_image
      }
    }
  }
`;

const GraphqlContainer = () => {
  const [limit, setLimit] = useState(12); // item count per page
  const [page, setPage] = useState(1);
  const [rating/*, setRating*/] = useState(0);
  const classes = useStyles();
  
  const { loading, error, data, refetch } = useQuery(getMovieListQuery, { variables: { limit, page, rating } });
  
  useEffect(() => {
    refetch();
  }, [refetch, page, limit]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(1);
  }  

  return (
    <DefaultSampleContent title="영화 리스트">
    { loading ?
      <p>Loading...</p> :
      error ?
      <p>{error.message}</p> :
      <>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              { data && data.movies.movies.map(movie => (
                <Grid key={movie.id} item>
                  <MovieCard movie={movie} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <TablePagination
          rowsPerPageOptions={[6, 12, 24]}
          component='div'
          count={data.movies.movie_count}
          rowsPerPage={limit}
          page={page}
          labelDisplayedRows={({ from, to, count }) => `페이지 ${page} of ${Math.ceil(count/limit)}`}
          labelRowsPerPage='페이지당 개수'
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </>
    }
    </DefaultSampleContent>
  )
}

export default GraphqlContainer;