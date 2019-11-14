import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
// import fetch from 'unfetch';
import 'unfetch/polyfill';

import DefaultLayout from './containers/DefaultLayout';

const client = new ApolloClient({
  uri: 'https://ninpeng-movie.netlify.com',
  cache: new InMemoryCache(),
  // fetchOptions: { fetch },
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
