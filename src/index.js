import React from 'react';
import { StatusBar } from 'react-native';

import App from '~/App';

export default function src() {
  return (
    <>
      <App />
      <StatusBar barStyle="light-content" backgroundColor="#22202c" />
    </>
  );
}
