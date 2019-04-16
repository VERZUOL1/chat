import intl from './intl';
import { UPDATE_APPLICATION_SETTINGS } from '../constants/action-types';
import en from '../locales/en';

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  };
  const next = jest.fn();

  const invoke = action => intl(store)(next)(action);

  return { store, next, invoke }
};

it('passes through non-function action', () => {
  const { next, invoke } = create();
  const action = { type: 'TEST' };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action)
});

it('dispatch locale update action', () => {
  const { invoke, store } = create();
  const action = {
    type: UPDATE_APPLICATION_SETTINGS,
    property: 'selectedLocale',
    value: { value: 'en' }
  };
  invoke(action);

  expect(store.dispatch).toHaveBeenCalledWith({
    type: '@@intl/UPDATE',
    payload: {
      formats: undefined,
      ...en
    }});
});
