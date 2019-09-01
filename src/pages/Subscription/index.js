import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';
import Header from '~/components/Header';
import MeetupItem from '~/components/MeetupItem';

import { Container, MeetupList } from './styles';
import { subscriptionsRequest } from '~/store/modules/meetup/actions';

function Subscription() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const loading = useSelector(state => state.meetup.loading);
  const subscriptions = useSelector(state => state.meetup.subscriptions);

  useEffect(() => {
    dispatch(subscriptionsRequest(page));
  }, [dispatch, page]);

  function hanldeEndList() {
    if (subscriptions.length > 9) {
      setPage(page + 1);
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        {loading ? (
          <ActivityIndicator color="#FFF" size={24} />
        ) : (
          <MeetupList
            data={subscriptions}
            keyExtractor={item => String(item.id)}
            renderItem={item => <MeetupItem data={item} isSubscription />}
            onEndReachedThreshold={0.2}
            onEndReached={hanldeEndList}
          />
        )}
      </Container>
    </Background>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscription);
