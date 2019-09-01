import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Mi from 'react-native-vector-icons/MaterialIcons';

import { View, Alert } from 'react-native';

import api from '~/services/api';

import Button from '~/components/Button';
import {
  Container,
  ImageMeetup,
  Section,
  Title,
  Infos,
  InfosText,
} from './styles';
import { subscriptionsRequest } from '~/store/modules/meetup/actions';

export default function MeetupItem({ data, isSubscription }) {
  const dispatch = useDispatch();
  const { item } = data;

  const profile = useSelector(state => state.user.profile);

  async function handleSubscription(id) {
    if (profile.id === item.user.id) {
      Alert.alert(
        'Falha ao inscrever-se',
        'Você não pode se cadastar em um meetup que está organizando'
      );
      return;
    }

    if (item.past) {
      Alert.alert(
        'Falha ao inscrever-se',
        'Você não pode se cadastar em um meetup que já passou'
      );
      return;
    }
    await api.post(`meetups/${id}/subscription`);
    dispatch(subscriptionsRequest());
  }

  async function handleUnSubscription(id) {
    await api.delete(`meetups/${id}/subscription`);
    dispatch(subscriptionsRequest());
  }

  const image = {
    uri: `http://192.168.0.103:3333/files/${item.image.path}`,
  };

  return (
    <Container>
      <View>
        <ImageMeetup source={image} />
      </View>
      <Section>
        <Title>{item.title}</Title>

        <Infos>
          <Icon name="calendar" color="#0008" size={24} />
          <InfosText>{item.dataFormatted}</InfosText>
        </Infos>

        <Infos>
          <Mi name="location-on" color="#0008" size={24} />
          <InfosText>{item.location}</InfosText>
        </Infos>

        <Infos>
          <Mi name="person" color="#0008" size={24} />
          <InfosText>Organizador: {item.user.name}</InfosText>
        </Infos>

        {isSubscription ? (
          <Button onPress={() => handleUnSubscription(item.id)}>
            Cancelar inscrição
          </Button>
        ) : (
          <Button onPress={() => handleSubscription(item.id)}>
            Realizar inscrição
          </Button>
        )}
      </Section>
    </Container>
  );
}

MeetupItem.propTypes = {
  isSubscription: PropTypes.bool,
  data: PropTypes.shape({
    item: PropTypes.shape({
      id: PropTypes.number,
      past: PropTypes.bool,
      title: PropTypes.string,
      dataFormatted: PropTypes.string,
      location: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
      image: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

MeetupItem.defaultProps = {
  isSubscription: false,
};
