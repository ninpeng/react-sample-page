import React, { useState } from 'react';
import { Container, Jumbotron, Pagination } from 'react-bootstrap';
import { gql } from 'apollo-boost';

import { useQuery } from '@apollo/react-hooks';

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
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState(0);
  
  const { loading, error, data } = useQuery(getMovieListQuery, { variables: { limit, page, rating } });

  const PageItems = ({ movie_count, limit, page_number }) => {

    const pageCount = Math.ceil(movie_count / limit);

    return (
      <>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{page_number-2}</Pagination.Item>
        <Pagination.Item>{page_number-1}</Pagination.Item>
        <Pagination.Item active>{page_number}</Pagination.Item>
        <Pagination.Item>{page_number+1}</Pagination.Item>
        <Pagination.Item disabled>{page_number+2}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{pageCount}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </>
    )
  }

  return (
    <Container>
      <Jumbotron>
        <h1 className="display-5">영화 리스트</h1>
      </Jumbotron>
      <div>
      { loading ?
        <p>Loading...</p> :
        error ?
        <p>{error.message}</p> :
        <div>
          { data && data.movies.movies.map(movie => {
              return (
                <ul key={movie.id}>
                  <h3>{movie.title}</h3>
                  <img src={movie.medium_cover_image} alt="" />
                </ul>
              )
            })
          }
          <div>
            <Pagination><PageItems {...data.movies} /></Pagination>
          </div>
        </div>
      }
      </div>
    </Container>
  )
}

export default GraphqlContainer;