import axios from 'axios';
import {accessTokenWithType} from '../selectors/auth';
import environment from './env';

const instance = axios.create({
  baseURL: environment.baseUrl,
  headers: {
    Accept: 'text/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export function createAxios({getState}) {
  instance.interceptors.request.use(
    (config) => {
      const {useAuth, ...headers} = config.headers;
      if (useAuth !== false) {
        const state = getState();
        headers.Authorization = accessTokenWithType(state);
      }
      return {...config, headers};
    },
    (error) => {
      return Promise.reject(error);
    },
  );
}

export default instance;
