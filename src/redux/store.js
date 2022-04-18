import { configureStore } from '@reduxjs/toolkit';
import getDataSliceReducer from './features/slice/getDataSlice';
export const store = configureStore({
  reducer: {
    data: getDataSliceReducer,
  },
});
