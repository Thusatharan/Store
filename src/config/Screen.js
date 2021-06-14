import {Alert} from 'react-native';

/**
 * @description Common method to show Alert
 * @param {String} [message]
 * @param {String} [title = ''}
 * @memberof Screen
 */
const showAlert = (message, title = '') => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'OK',

        style: 'OK',
      },
    ],
    {cancelable: false},
  );
};

export default {
  showAlert,
};
