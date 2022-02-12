import { useState, useEffect } from 'react';
import { Box, Grid, Pagination } from '@mui/material';
import { gql, useQuery } from '@apollo/client';

import DefaultSampleContent from '../DefaultSampleContent';
import MovieCard from './MovieCard';

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
        language
        medium_cover_image
      }
    }
  }
`;

const MovieListPage = () => {
  const [limit /*, setLimit*/] = useState(12); // item count per page
  const [page, setPage] = useState(1);
  const [rating /*, setRating*/] = useState(0);

  const { loading, error, data, refetch } = useQuery(getMovieListQuery, {
    variables: { limit, page, rating },
  });

  useEffect(() => {
    refetch();
  }, [refetch, page, limit]);

  const handleChangePage = (_event, page) => {
    setPage(page);
  };

  return (
    <DefaultSampleContent title="영화 리스트">
      {error ? (
        <p>{error.message}</p>
      ) : (
        <Grid container spacing={2}>
          {(loading ? Array.from(Array(limit)) : data.movies.movies).map((movie, index) => (
            <Grid
              key={movie ? movie.id : index}
              item
              justifyContent="center"
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
      <Box display="flex" py={3} justifyContent="center">
        <Pagination
          page={page}
          count={data ? data.movies.movie_count : 1}
          size="small"
          onChange={handleChangePage}
        />
      </Box>
    </DefaultSampleContent>
  );
};

export default MovieListPage;
