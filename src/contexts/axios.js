import React from 'react';
import axios from '../config/axios';

const AxiosContext = React.createContext(axios);
export const AxiosProvider = AxiosContext.Provider;

export default AxiosContext;
