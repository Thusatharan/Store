import jwtDecode from 'jwt-decode';
import {createSelector} from 'reselect';
import moment from '../../config/moment';

export const auth = (state) => {
  return state.auth;
};

export const accessToken = createSelector(auth, (state) => {
  return state.token;
});
export const user = createSelector(auth, (state) => {
  return state.user;
});

export const tokenType = createSelector(auth, (state) => {
  return state.tokenType;
});

export const expiresIn = createSelector(accessToken, (token) => {
  return token ? jwtDecode(token).exp : null;
});

export const accessTokenWithType = createSelector(
  [tokenType, accessToken],
  (type, token) => {
    return type && token ? `${type} ${token}` : null;
  },
);

export const isTokenValid = createSelector(expiresIn, (expires) => {
  return expires ? moment.unix(expires).isSameOrAfter(moment()) : false;
});

export const isAuthorized = createSelector(
  [isTokenValid, user],
  (valid, userObj) => {
    return valid && userObj?.id !== undefined;
  },
);
