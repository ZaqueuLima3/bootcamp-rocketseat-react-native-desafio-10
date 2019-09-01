import React, { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, addDays, subDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import { TouchableOpacity, ActivityIndicator } from 'react-native';

import Background from '~/components/Background';
import Header from '~/components/Header';
import MeetupItem from '~/components/MeetupItem';

import { Container, Head, DateText, MeetupList } from './styles';
import { meetupsRequest } from '~/store/modules/meetup/actions';

function Dashboard() {
  const dispatch = useDispatch();

  const now = new Date();
  const [date, setDate] = useState(now);
  const [page, setPage] = useState(1);

  const loading = useSelector(state => state.meetup.loading);
  const meetups = useSelector(state => state.meetup.meetups);

  const dateFormatted = useMemo(() => {
    return format(date, "d 'de' MMMM", {
      locale: pt,
    });
  }, [date]);

  useEffect(() => {
    dispatch(meetupsRequest(date, page));
  }, [date, dispatch, page]);

  function hanldeEndList() {
    if (meetups.length > 9) {
      setPage(page + 1);
    }
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  return (
    <Background>
      <Header />
      <Container>
        <Head>
          <TouchableOpacity onPress={handlePrevDay}>
            <Icon name="keyboard-arrow-left" color="#FFF" size={24} />
          </TouchableOpacity>

          <DateText>{dateFormatted}</DateText>

          <TouchableOpacity onPress={handleNextDay}>
            <Icon name="keyboard-arrow-right" color="#FFF" size={24} />
          </TouchableOpacity>
        </Head>

        {loading ? (
          <ActivityIndicator color="#FFF" size={24} />
        ) : (
          <MeetupList
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={item => <MeetupItem data={item} />}
            onEndReachedThreshold={0.2}
            onEndReached={hanldeEndList}
          />
        )}
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
