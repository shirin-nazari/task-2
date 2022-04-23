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
      // delete state.data.keys[payload];
      // Object.keys(null);
      // Object.values((state.data = null));
      // if (window.UndefinedVariable) {
      //   Object.assign(window.UndefinedVariable, {});
      // }

      state.data = payload;
      // const index = state.data.findIndex((item) => item.id === payload);
      // if (index > -1) {
      //   state.splice(index, 1);
      // }
      // const deleteOb = state.data
      //   .map((item) => {
      //     return item.id;
      //   })
      //   .indexOf(37);
      // state.data.splice(deleteOb, 1);
      // return state.data;
      // delete state.data[payload];
      // delete Object.values;
      // state.data = 0;
      // state.length = 0;
      // state.splice(payload);
      // state.data.filter((item) => item);
      // state.data.filter((item, index) => index !== payload);
    },

    // passData(state) {
    //   return state;
    // },
  },
});
export const { addData, deleteData } = getDataSlice.actions;
export default getDataSlice.reducer;
