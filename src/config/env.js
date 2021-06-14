import Config from 'react-native-config';

const envirement = {
  appUrl: Config.APP_URL,
  authUrl: 'https://grocere-online.com/store/api/customer/login',
  baseUrl: 'https://grocere-online.com',
  isProduction: __DEV__,

  dateFormat: 'YYYY-MM-DD',
  timeFormat: 'HH:mm:ss',
  dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
};

export default envirement;
