import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
  subscriptions: [],
  loading: false,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/LOAD_MEETUPS_REQUEST':
      case '@meetup/LOAD_SUBSCRIPTIONS_REQUEST':
        if (action.payload.page === 1) {
          draft.loading = true;
        }
        break;

      case '@meetup/LOAD_MEETUPS_SUCCESS':
        draft.meetups.push(...action.payload.meetups);
        draft.loading = false;
        break;

      case '@meetup/LOAD_SUBSCRIPTIONS_SUCCESS':
        draft.subscriptions = action.payload.subscriptions;
        draft.loading = false;
        break;

      case '@auth/SIGN_OUT':
        draft.meetups = [];
        draft.subscription = [];
        draft.loading = false;
        break;

      default:
        return state;
    }
  });
}
