import { updateIntl } from 'react-intl-redux';

import en from '../locales/en';
import ru from '../locales/ru';

const locales = {
  en,
  ru
};

/**
 * Intl middleware
 */
const intlMiddleware = ({ dispatch, getState }) => {
  return next => action => {
    switch (action.type) {
      case 'UPDATE_APPLICATION_SETTINGS': {
        if (action.property === 'selectedLocale') {

          const selected = action.value.value;
          const locale = locales[selected];
          dispatch(updateIntl({
            ...locale
          }));
        }
        break;
      }
      default:
        break;

    }

    return next(action);
  };
};

export default intlMiddleware;
