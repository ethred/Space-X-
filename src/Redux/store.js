import { configureStore } from '@reduxjs/toolkit';
// import { logger } from 'redux-logger';
import rocketsReducer from './rockets/rocketsSlice';
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
