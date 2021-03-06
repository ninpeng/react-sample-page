import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Pagination from 'material-ui-flat-pagination';
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
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [rating /*, setRating*/] = useState(0);

  const { loading, error, data, refetch } = useQuery(getMovieListQuery, {
    variables: { limit, page, rating },
  });

  useEffect(() => {
    refetch();
  }, [refetch, page, limit]);

  const handleChangePage = (event, offset) => {
    setOffset(offset);
    setPage(Math.ceil(offset / limit) + 1);
  };

  return (
    <DefaultSampleContent title="영화 리스트">
      {error ? (
        <p>{error.message}</p>
      ) : (
        <Grid container spacing={2}>
          {(loading ? Array.from(Array(limit)) : data.movies.movies).map((movie, index) => (
            <Grid key={movie ? movie.id : index} container item justify="center" xs={12} sm lg={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
      <Box display="flex" py={3} justifyContent="center">
        <Pagination
          limit={limit}
          offset={offset}
          total={data ? data.movies.movie_count : 1}
          reduced
          size="small"
          onClick={handleChangePage}
        />
      </Box>
    </DefaultSampleContent>
  );
};

export default MovieListPage;
