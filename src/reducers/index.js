import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import * as persist from '../config/persist';
import {PURGE} from '../constants/ActionTypes';
import authReducer from './auth';

const appReducer = combineReducers({
  auth: persistReducer(persist.authToken, authReducer),
});

const rootReducer = (state, action) => {
  if (action.type === PURGE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
