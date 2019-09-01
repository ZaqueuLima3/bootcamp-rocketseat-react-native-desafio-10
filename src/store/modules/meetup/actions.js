export function meetupsRequest(date, page) {
  return {
    type: '@meetup/LOAD_MEETUPS_REQUEST',
    payload: { date, page },
  };
}

export function meetupsSuccess(meetups) {
  return {
    type: '@meetup/LOAD_MEETUPS_SUCCESS',
    payload: { meetups },
  };
}

export function subscriptionsRequest(page) {
  return {
    type: '@meetup/LOAD_SUBSCRIPTIONS_REQUEST',
    payload: { page },
  };
}

export function subscriptionsSuccess(subscriptions) {
  return {
    type: '@meetup/LOAD_SUBSCRIPTIONS_SUCCESS',
    payload: { subscriptions },
  };
}
