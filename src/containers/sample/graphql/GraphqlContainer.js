import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MovieListPage from './MovieListPage';
import MovieDetailPage from './MovieDetailPage';

const GraphqlContainer = () => {
  return (
    <Switch>
      <Route exact path="/sample/graphql" component={MovieListPage} />
      <Route exact path="/sample/graphql/detail/:id" component={MovieDetailPage} />
    </Switch>
  )
}

export default GraphqlContainer;
