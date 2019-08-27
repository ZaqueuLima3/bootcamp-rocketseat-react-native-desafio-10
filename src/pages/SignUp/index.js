import React from 'react';
import { Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import Button from '~/components/Button';

import Logo from '~/components/Logo';

import Background from '~/components/Background';
import { Container, Form, Input, SignUpLink, SignUpLinkText } from './styles';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Logo />

        <Form>
          <Input autoCorrect={false} placeholder="Nome completo" />

          <Input
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

          <Input secureTextEntry placeholder="Sua senha secreta" />
          <Button onPress={() => {}}>Criar conta</Button>
        </Form>

        <SignUpLink onPress={() => navigation.navigate('SignIn')}>
          <SignUpLinkText>Já tenho login</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
