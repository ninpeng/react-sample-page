import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';
import { useServiceWorker } from './useServiceWorker';

// import fetch from 'unfetch';
import 'unfetch/polyfill';

import DefaultLayout from 'containers/DefaultLayout';
import { CustomThemeProvider } from 'utils/CustomThemeProvider';

const client = new ApolloClient({
  uri: 'https://ninpeng-movie.herokuapp.com',
  cache: new InMemoryCache(),
  // fetchOptions: { fetch },
});

const action = () => (
  <Button color="inherit" onClick={() => window.location.reload}>
    RELOAD
  </Button>
);

function App() {
  const { isUpdateAvailable } = useServiceWorker();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (isUpdateAvailable) {
      enqueueSnackbar('업데이트를 위해 새로고침을 눌러주세요.', {
        action,
        variant: 'info',
        persist: true,
      });
    }
  }, [isUpdateAvailable, enqueueSnackbar]);

  return (
    <CustomThemeProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <DefaultLayout />
        </BrowserRouter>
      </ApolloProvider>
    </CustomThemeProvider>
  );
}

export default App;
