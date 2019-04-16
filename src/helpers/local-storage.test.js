import { loadState, saveState } from './local-storage';
import { DateTime } from 'luxon';

it('saves and loads state from local storage', () => {
  const stateToPersist = {
    settings: {
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
    }
  };
  saveState(stateToPersist);

  const restoredState = loadState();

  expect(stateToPersist).toEqual(restoredState);
});

