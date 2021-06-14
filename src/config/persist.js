import AsyncStorage from '@react-native-async-storage/async-storage';

export const authToken = {
  key: 'authToken',
  storage: AsyncStorage,
};
