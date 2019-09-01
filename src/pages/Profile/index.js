import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';
import Header from '~/components/Header';
// import { Container } from './styles';

export default function Profile() {
  return (
    <Background>
      <Header />
      <Text>Profile</Text>
    </Background>
  );
}
