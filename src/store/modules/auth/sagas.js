import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';

import { signInSuccess, signUpSuccess, signFailure } from './actions';
import { meetupsRequest } from '../meetup/actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(meetupsRequest());
    yield put(signInSuccess(token, user));
  } catch (err) {
    yield put(signFailure());
    // toast.error('Falha na autenticação, verifique seus dados');
  }
}

export function* signUp({ payload }) {
  try {
    const { navigation } = payload;
    yield call(api.post, 'users', {
      ...payload,
    });

    yield put(signUpSuccess());
    navigation.navigate('SignIn');
  } catch (err) {
    yield put(signFailure());
    // toast.error('Falha no cadastro, verifique seus dados!');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
