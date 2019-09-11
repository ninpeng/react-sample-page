import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import DefaultLayout from './containers/DefaultLayout';

const client = new ApolloClient({
  uri: 'https://ninpeng-movie.herokuapp.com',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
