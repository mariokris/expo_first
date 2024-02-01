import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { setToken } from '../authSlice';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://todo-api-omega.vercel.app/',
  }),
  endpoints: builder => ({
    //builder.mutation will be use when we want to change data in backend
    //builder.query will be use when we want to fetch data from backend
    jonggol: builder.query({
      query: () => '',
    }),
    login: builder.mutation({
      query: credential => ({
        //this credential parameter is username and password that we send to backend
        url: '/api/v1/auth/login',
        method: 'POST',
        body: credential,
      }),
      async onQueryStarted(arg, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setToken(data?.user?.token));
        } catch (error) {
          if (error?.error) {
            alert(error?.error?.data?.message);
          } else console.log('ERROR:', error.data);
        }
      },
    }),
  }),
});

//useJonggolQuery is generated(we can't customize by ourself) by rtkq, same as useLoginMutation
export const {useJonggolQuery, useLoginMutation} = apiSlice;
