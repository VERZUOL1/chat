import {
  UPDATE_APPLICATION_SETTINGS,
  RESET_APPLICATION_SETTINGS
} from '../constants/action-types';

/**
 * Updates selected application option
 * @param property
 * @param value
 * @returns {{property: *, type: string, value: *}}
 */
export function updateApplicationSettings(property, value) {
  return {
    type: UPDATE_APPLICATION_SETTINGS,
    property,
    value
  }
}

/**
 * Reset app settings to default
 * @returns {{type: string}}
 */
export function resetAppSettings() {
  return {
    type: RESET_APPLICATION_SETTINGS
  }
}
