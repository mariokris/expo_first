import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
            query: (credential) => ({
                //this credential parameter is username and password that we send to backend
                url: '/api/v1/auth/login',
                method: 'POST',
                body: credential,
            }),
        }),
    }),
});

export const {useJonggolQuery, useLoginMutation} = apiSlice;