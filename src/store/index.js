import React from 'react';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';
import {persistStore} from 'redux-persist';
import {applyMiddleware, createStore, compose} from 'redux';
import {createAxios} from '../config/axios';
import reducers from '../reducers';

const createConfigureStore = async () => {
  const store = createStore(
    reducers,
    compose(applyMiddleware(thunk, promise, logger)),
  );
  const persist = await persistStore(store);
  createAxios(store);
  return {store, persist};
};

export function useStore() {
  const alive = React.useRef(true);
  const [store, setStore] = React.useState();
  const [persist, setPersist] = React.useState();

  React.useEffect(() => {
    const configStore = async () => {
      const appStore = await createConfigureStore();
      if (alive.current) {
        setStore(appStore.store);
        setPersist(appStore.persist);
      }
    };

    configStore();
    return () => {
      alive.current = false;
    };
  }, []);

  return {store, persist};
}

export default createConfigureStore;
