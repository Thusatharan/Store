import React from 'react';
import AxiosContext from '../contexts/axios';
import {wait} from '../lib/healper';

export const useDispatch = () => {
  const axios = React.useContext(AxiosContext);

  const dispatch = React.useCallback(
    async (config) => {
      try {
        const {data} = await axios.request(config);
        return data;
      } catch (e) {
        throw e.response;
      }
    },
    [axios],
  );

  return {dispatch};
};

export const useFetch = (config) => {
  const axios = React.useContext(AxiosContext);
  const fetchConfig = React.useRef(config);

  const [error, setError] = React.useState();
  const [response, setResponse] = React.useState();
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let live = true;
    const dispatch = async () => {
      setLoading(true);

      try {
        const {data} = await axios.request(fetchConfig.current);
        if (live) {
          setResponse(data);
        }
      } catch (e) {
        if (live) {
          setError(e.response);
        }
      }

      if (live) {
        wait(1000).then(() => setLoading(false));
      }
    };

    dispatch();
    return () => {
      live = false;
    };
  }, [axios, fetchConfig]);

  return {error, isLoading, response};
};
