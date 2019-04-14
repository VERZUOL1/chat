export function updateApplicationSettings(property, value) {
  return {
    type: 'UPDATE_APPLICATION_SETTINGS',
    property,
    value
  }
}

export function resetAppSettings() {
  return {
    type: 'RESET_APPLICATION_SETTINGS'
  }
}
