import React from 'react';
import { Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import Button from '~/components/Button';

import Logo from '~/components/Logo';

import Background from '~/components/Background';
import { Container, Form, Input, SignUpLink, SignUpLinkText } from './styles';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Logo />

        <Form>
          <Input
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

          <Input secureTextEntry placeholder="Sua senha secreta" />
          <Button onPress={() => {}}>Acessar</Button>
        </Form>

        <SignUpLink onPress={() => navigation.navigate('SignUp')}>
          <SignUpLinkText>Criar conta gratuita</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
