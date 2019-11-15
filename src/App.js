import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';

// import fetch from 'unfetch';
import 'unfetch/polyfill';

import DefaultLayout from 'containers/DefaultLayout';
import { CustomThemeProvider } from 'utils/CustomThemeProvider';

const client = new ApolloClient({
  uri: 'https://ninpeng-movie.herokuapp.com',
  cache: new InMemoryCache(),
  // fetchOptions: { fetch },
});

function App() {
  return (
    <CustomThemeProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </CustomThemeProvider>
  );
}

export default App;
