import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import authReducer from './authSlice';
import { apiSlice } from './api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    //setup api
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  //middleware for rtkq api setup needs
  middleware: defaultMiddleware => defaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);