import React from 'react';
import ReactDOM from 'react-dom';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import * as models from './models';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

// generate Redux store
const store = init({
    models,
});

const Root = () => (
  <Provider store={store}>
    <SnackbarProvider
      maxSnack={3}
      dense
      preventDuplicate
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration={2000}
    >
      <App />
    </SnackbarProvider>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
