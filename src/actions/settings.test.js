import * as ActionTypes from '../constants/action-types';
import * as actions from './settings';
import { UPDATE_APPLICATION_SETTINGS } from '../constants/action-types';

it('create action to update application settings', () => {
  const expectedAction = {
    type: ActionTypes.UPDATE_APPLICATION_SETTINGS,
    property: 'username',
    value: 'Atos'
  };
  expect(
    actions.updateApplicationSettings(
      'username',
      'Atos'
    ))
    .toEqual(expectedAction);
});

it('create action to reset application settings', () => {
  const expectedAction = {
    type: ActionTypes.RESET_APPLICATION_SETTINGS
  };
  expect(
    actions.resetAppSettings())
    .toEqual(expectedAction);
});