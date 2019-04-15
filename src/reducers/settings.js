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

/**
 * Settings reducer
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_APPLICATION_SETTINGS': {
      return {
        ...state,
        [action.property]: action.value
      }
    }
    case 'RESET_APPLICATION_SETTINGS': {
      return {
        ...initialState
      }
    }
    default:
      return state;
  }
}
