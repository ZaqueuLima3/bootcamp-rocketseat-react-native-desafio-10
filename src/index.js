import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import { store, persistor } from './store';
import App from '~/App';

export default function src() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#19171F" />
        <App />
      </PersistGate>
    </Provider>
  );
}
