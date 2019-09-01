import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';
import Header from '~/components/Header';
import MeetupItem from '~/components/MeetupItem';

import { Container, Head, Date, MeetupList } from './styles';

function Dashboard() {
  return (
    <Background>
      <Header />
      <Container>
        <Head>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="keyboard-arrow-left" color="#FFF" size={24} />
          </TouchableOpacity>

          <Date>31 de maio</Date>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="keyboard-arrow-right" color="#FFF" size={24} />
          </TouchableOpacity>
        </Head>

        <MeetupList
          data={[1, 2, 3]}
          keyExtractor={item => String(item)}
          renderItem={item => <MeetupItem />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
