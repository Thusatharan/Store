import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {useStore} from './src/store';
import {AxiosProvider} from './src/contexts/axios';
import axios from './src/config/axios';

import Welcome from './src/screens/Welcome';
import Navigator from './src/navigator';

// To see all the requests in the chrome Dev tools in the network tab.
// XMLHttpRequest = GLOBAL.originalXMLHttpRequest
//   ? GLOBAL.originalXMLHttpRequest
//   : GLOBAL.XMLHttpRequest;
// // fetch logger
// global._fetch = fetch;
// global.fetch = function (uri, options, ...args) {
//   return global._fetch(uri, options, ...args).then((response) => {
//     return response;
//   });
// };

const App = () => {
  const {store, persist} = useStore();
  return (
    <SafeAreaProvider>
      {store && persist ? (
        <Provider store={store}>
          <PersistGate loading={<Welcome />} persistor={persist}>
            <NavigationContainer>
              <AxiosProvider value={axios}>
                <Navigator />
              </AxiosProvider>
            </NavigationContainer>
          </PersistGate>
        </Provider>
      ) : (
        <Welcome />
      )}
    </SafeAreaProvider>
  );
};
export default App;
