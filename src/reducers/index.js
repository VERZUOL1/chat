import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { intlReducer } from 'react-intl-redux';
import settings from './settings';
import chat from './chat';

export default (history) => combineReducers({
  router: connectRouter(history),
  intl: intlReducer,
  settings,
  chat
});
