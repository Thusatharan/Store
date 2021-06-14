import camelcaseKeys from 'camelcase-keys';
import {LOGIN_SUCCESS} from '../../constants/ActionTypes';

const initialState = {
  tokenType: 'Bearer',
  user: {
    id: null,
    email: null,
    name: null,
    role: {
      id: null,
      name: null,
    },
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...camelcaseKeys(action.response),
        user: {
          id: action.response.data.id,
          name: action.response.data.name,
          email: action.response.data.email,
          role: {
            id: action.response.data.id,
            name: action.response.data.name,
          },
        },
      };
    default:
      return state;
  }
};

export default authReducer;
