import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
// import { tokenReceived, loggedOut } from './authSlice';
import { SERVICE_TAGS_LIST } from 'constants/serviceTags';
import { TRefreshResponse } from './authService/models';

const API_NAME = 'initialApi';
const BASE_API = 'v1';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('access');

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refresh = localStorage.getItem('refresh');
    if (refresh) {
      const refreshResult = await baseQuery(
        {
          url: '/refreshToken',
          method: 'POST',
          body: { refresh: localStorage.getItem('refresh') },
        },
        api,
        extraOptions,
      );
      if (refreshResult.data) {
        localStorage.setItem('access', (refreshResult.data as TRefreshResponse).access);
        result = await baseQuery(args, api, extraOptions);
      }
    }
  }
  return result;
};

export const initialApiServiceAuth = createApi({
  reducerPath: API_NAME,
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: SERVICE_TAGS_LIST,
});
