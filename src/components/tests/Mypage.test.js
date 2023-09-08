import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MyPage from '../Mypage';

const mockStore = configureStore([]);
const initialState = {
  missions: {
    missions: [
      { id: 1, mission_name: 'Mission 1', joined: true },
      { id: 2, mission_name: 'Mission 2', joined: false },
    ],
  },
  rockets: {
    rockets: [
      { id: 1, name: 'Rocket 1', reserved: true },
      { id: 2, name: 'Rocket 2', reserved: false },
    ],
  },
};
const store = mockStore(initialState);

test('MyPage component matches snapshot', () => {
  const { container } = render(
    <Provider store={store}>
      <MyPage />
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
