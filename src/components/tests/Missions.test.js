import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../Missions';

const mockStore = configureStore([]);
const store = mockStore({
  missions: {
    missions: [
      {
        mission_id: 1,
        mission_name: 'Mission 1',
        description: 'Description 1',
        joined: true,
      },
    ],
    loading: false,
    error: null,
  },
});

it('renders correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
