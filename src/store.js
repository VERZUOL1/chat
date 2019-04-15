import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
import socketMiddleware from './middlewares/socket';
import intlMiddleware from './middlewares/intl';
import { loadState, saveState } from './helpers/local-storage';
import enLocale from './locales/en';

export const history = createBrowserHistory();

const initialState = {
  intl: enLocale
};
const persistedState = loadState();
const enhancers = [];
const middleware = [
  thunk,
  socketMiddleware,
  intlMiddleware,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer(history),
  persistedState || initialState,
  composedEnhancers
);

store.subscribe(() => {
  saveState({
    settings: store.getState().settings,
    intl: store.getState().intl
  });
});

export default store;
