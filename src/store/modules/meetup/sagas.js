import { all, takeLatest, put, call } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import { meetupsSuccess, subscriptionsSuccess } from './actions';

export function* loadMeetups({ payload }) {
  const { date, page } = payload;

  const response = yield call(api.get, 'events', {
    params: { date, page },
  });

  console.tron.log(response);

  const data = response.data.map(meetup => {
    return {
      ...meetup,
      dataFormatted: format(
        parseISO(meetup.date),
        "dd 'de' MMMM', às' H:mm'h'",
        {
          locale: pt,
        }
      ),
    };
  });

  yield put(meetupsSuccess(data));
}

export function* loadSubscriptions() {
  const response = yield call(api.get, 'subscription');

  const data = response.data.map(dt => {
    return {
      ...dt.meetup,
      dataFormatted: format(
        parseISO(dt.meetup.date),
        "dd 'de' MMMM', às' H:mm'h'",
        {
          locale: pt,
        }
      ),
    };
  });

  yield put(subscriptionsSuccess(data));
}

export default all([
  takeLatest('@meetup/LOAD_MEETUPS_REQUEST', loadMeetups),
  takeLatest('@meetup/LOAD_SUBSCRIPTIONS_REQUEST', loadSubscriptions),
]);
