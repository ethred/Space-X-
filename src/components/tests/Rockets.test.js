import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../Rockets';

const mockStore = configureStore([]);
const initialState = {
  rockets: {
    rockets: [
      {
        rocket_id: '1',
        rocket_name: 'Falcon 9',
        reserved: true,
        description: 'This is a Falcon 9 rocket.',
        flickr_images: ['image_url'],
      },
      {
        rocket_id: '2',
        rocket_name: 'Atlas V',
        reserved: false,
        description: 'This is an Atlas V rocket.',
        flickr_images: ['image_url'],
      },
    ],
    status: 'idle',
    error: null,
  },
};
const store = mockStore(initialState);

test('Rockets component matches snapshot', () => {
  const { container } = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
