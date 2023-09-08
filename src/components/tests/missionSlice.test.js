import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getMissions } from '../../Redux/missions/missionSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getMissions thunk', () => {
  it('fetches missions successfully', async () => {
    const mockMissions = [];

    const store = mockStore({
      missions: {
        status: 'idle',
        missions: [],
        error: null,
      },
    });
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockMissions),
    });

    await store.dispatch(getMissions());

    const actions = store.getActions();

    expect(actions[0].type).toBe(getMissions.pending.type);
    expect(actions[1].type).toBe(getMissions.fulfilled.type);
    expect(actions[1].payload).toEqual(mockMissions);
  });

  it('handles fetch failure', async () => {
    const store = mockStore({
      missions: {
        status: 'idle',
        missions: [],
        error: null,
      },
    });

    global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch'));

    await store.dispatch(getMissions());

    const actions = store.getActions();

    expect(actions[0].type).toBe(getMissions.pending.type);
    expect(actions[1].type).toBe(getMissions.rejected.type);
    expect(actions[1].error.message).toEqual('Failed to fetch');
  });
});
