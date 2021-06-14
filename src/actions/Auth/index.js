import {PURGE} from '../../constants/ActionTypes';
import axios from '../../config/axios';
import env from '../../config/env';
import {LOGIN_SUCCESS, AUTH_USER_LOADED} from '../../constants/ActionTypes';

export const login = (values) => {
  return async (dispatch) => {
    const value = await axios.post(env.authUrl, {
      ...values,
      token: true,
    });
    const loginSuccessAction = {
      type: LOGIN_SUCCESS,
      response: value.data,
    };
    dispatch(loginSuccessAction);
    return value.data;
  };
};

export const loadUser = () => {
  return async (dispatch) => {
    const value = await axios.get('/user');
    const userLoadedAction = {
      type: AUTH_USER_LOADED,
      response: value.data,
    };
    dispatch(userLoadedAction);
    return value.data;
  };
};

export const logout = () => {
  const logoutAction = {
    type: PURGE,
    result: () => null,
  };

  return logoutAction;
};
