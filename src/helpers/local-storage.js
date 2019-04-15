/**
 * Deserialize stored data from local storage
 * @returns {*}
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);

    return undefined;
  }
};

/**
 * Serialize state to localstorage
 * @param state
 */
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
};
