import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
// App level imports
import * as persist from '../config/persist';
// Internal imports
import authReducer from './auth';
import commonReducer from './commonReducer';

const appReducer = () =>
  combineReducers({
    common: commonReducer,
    auth: persistReducer(persist.authToken, authReducer),
  });
export default appReducer;
