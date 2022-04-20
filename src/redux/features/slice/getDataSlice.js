import { StarRateOutlined } from '@mui/icons-material';
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
    deleteData(state, { payload }) {
      // state.data = 0;
      // state.length = 0;
      // state.splice(payload);
      // state.data.filter((item, index) => index !== payload);
    },
    copyData(state, { payload }) {
      navigator.clipboard.writeText(payload);
    },
    // passData(state) {
    //   return state;
    // },
  },
});
export const { addData, deleteData, copyData } = getDataSlice.actions;
export default getDataSlice.reducer;
