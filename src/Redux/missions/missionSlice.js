import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  loading: false,
  error: null,
};

export const getMissions = createAsyncThunk('get/missions', () => fetch('https://api.spacexdata.com/v3/missions')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }));

const missionSlice = createSlice({
  name: 'Missions',
  initialState,
  reducers: {
    toggleJoinStatus: (state, action) => {
      const id = action.payload;
      state.missions = state.missions.map((mission) => (
        mission.mission_id !== id ? mission : { ...mission, joined: !mission.joined }
      ));
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.loading = false;
        state.missions = action.payload;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleJoinStatus } = missionSlice.actions;
export default missionSlice.reducer;
