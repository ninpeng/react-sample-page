import { Route, Routes } from 'react-router-dom';

import MovieListPage from './MovieListPage';
import MovieDetailPage from './MovieDetailPage';

const GraphqlContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieListPage />} />
      <Route path="detail/:id" element={<MovieDetailPage />} />
    </Routes>
  );
};

export default GraphqlContainer;
