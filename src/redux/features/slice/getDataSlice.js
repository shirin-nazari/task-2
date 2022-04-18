import { createSlice } from '@reduxjs/toolkit';

const getDataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
  },
  reducers: {
    addData(state, { payload }) {
      state.data = payload;
    },
  },
});
export const { addData } = getDataSlice.actions;
export default getDataSlice.reducer;
