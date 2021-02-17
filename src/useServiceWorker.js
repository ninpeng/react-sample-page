import { createContext, useState, useEffect, useMemo, useContext } from 'react';
import * as serviceWorker from './serviceWorker';

const ServiceWorkerContext = createContext();

export const ServiceWorkerProvider = ({ children }) => {
  const [isUpdateAvailable, setUpdateAvailable] = useState(false);
  const [isOffline, /*setOffline*/] = useState(false);
  
  useEffect(() => {
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.register({
      onUpdate: registration => {
        setUpdateAvailable(true);
      }
    });
  }, []);
  
  const value = useMemo(() => ({
    isUpdateAvailable,
    isOffline,
  }), [isUpdateAvailable, isOffline]);
  
  return (
    <ServiceWorkerContext.Provider value={value}>
      {children}
    </ServiceWorkerContext.Provider>
  );
}

// With this React Hook we'll be able to access `isUpdateAvailable` and `isOffline`
export const useServiceWorker = () => {
  return useContext(ServiceWorkerContext);
}