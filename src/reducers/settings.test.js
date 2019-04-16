import reducer from './settings';
import {
  RESET_APPLICATION_SETTINGS,
  UPDATE_APPLICATION_SETTINGS,
} from '../constants/action-types';
import { DateTime } from 'luxon';

const initialState = {
  isLoading: false,
  isError: false,
  username: 'Default',
  theme: 'light',
  timeFormat: DateTime.TIME_SIMPLE,
  sendByKeys: false,
  locales: [
    { value: 'en', label: 'English' },
    { value: 'ru', label: 'Русский' }
  ],
  selectedLocale: { value: 'en', label: 'English' }
};

it('returns initial state' , () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

it('handles UPDATE_APPLICATION_SETTINGS action' , () => {
  expect(reducer(initialState, {
    type: UPDATE_APPLICATION_SETTINGS,
    property: 'username',
    value: 'Atos'
  })).toEqual({
    ...initialState,
    username: 'Atos'
  });
});

it('handles RESET_APPLICATION_SETTINGS action' , () => {
  expect(reducer({
    ...initialState,
    theme: 'dark',
    username: 'Atos'
  }, {
    type: RESET_APPLICATION_SETTINGS
  })).toEqual(initialState);
});


