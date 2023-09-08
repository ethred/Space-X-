import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchRockets } from '../../Redux/rockets/rocketsSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchRockets thunk', () => {
  it('fetches rockets successfully', async () => {
    const mockRockets = [];

    const store = mockStore({
      rockets: {
        status: 'idle',
        rockets: [],
        error: null,
      },
    });

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockRockets),
    });

    await store.dispatch(fetchRockets());

    const actions = store.getActions();

    expect(actions[0].type).toBe(fetchRockets.pending.type);
    expect(actions[1].type).toBe(fetchRockets.fulfilled.type);
    expect(actions[1].payload).toEqual(mockRockets);
  });

  it('handles fetch failure', async () => {
    const store = mockStore({
      rockets: {
        status: 'idle',
        rockets: [],
        error: null,
      },
    });

    global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch'));

    await store.dispatch(fetchRockets());

    const actions = store.getActions();

    expect(actions[0].type).toBe(fetchRockets.pending.type);
    expect(actions[1].type).toBe(fetchRockets.rejected.type);
    expect(actions[1].error.message).toEqual('Failed to fetch');
  });
});
