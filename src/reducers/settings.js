const initialState = {
  isLoading: false,
  isError: false,
  username: 'Default',
  theme: 'light',
  timeFormat: 'TIME_SIMPLE',
  sendByKeys: false
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
