import socketMiddleware from './socket';

jest.mock('socket.io-client');

const create = () => {
  const store = {
    getState: jest.fn(() => ({
      settings: {
        username: 'Default'
      }
    })),
    dispatch: jest.fn()
  };
  const next = jest.fn();
  const invoke = action => socketMiddleware(store)(next)(action);

  return { store, next, invoke }
};

it('passes through non-function action', () => {
  const { next, invoke } = create();
  const action = { type: 'TEST' };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action)
});
