import React from 'react';
import { View, Image, Text } from 'react-native';

import image from '~/assets/images/meetup-example.jpg';
import Button from '~/components/Button';
import { Container, Section, Title, Infos } from './styles';

export default function MeetupItem() {
  return (
    <Container>
      <View>
        <Image
          style={{
            width: '100%',
            resizeMode: 'cover',
            height: 150,
          }}
          source={image}
        />
      </View>
      <Section>
        <Title>Meetup de React Native</Title>
        <Infos>24 de julho, às 20h</Infos>
        <Infos>Rua Guilherme Gembala, 260</Infos>
        <Infos>Organizador: Zaqueu Lima</Infos>
        <Button onPress={() => {}}>Realizar inscrição</Button>
      </Section>
    </Container>
  );
}
