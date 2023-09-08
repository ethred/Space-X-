import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  loading: false,
  error: null,
};

export const fetchRockets = createAsyncThunk('get/rockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v4/rockets');
  const data = await response.json();
  return data;
});

const rocketsSlice = createSlice({
  name: 'Rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const id = action.payload;
      state.rockets = state.rockets.map(
        (rocket) => (rocket.id !== id ? rocket : { ...rocket, reserved: true }),
      );
    },
    cancelReservation: (state, action) => {
      const id = action.payload;
      state.rockets = state.rockets.map(
        (rocket) => (rocket.id !== id ? rocket : { ...rocket, reserved: false }),
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.loading = false;
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
