import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVICE_TAGS_LIST } from 'constants/serviceTags';
export const API_NAME = 'initialApi';
export const BASE_API = 'https://ya-praktikum.tech/api/v2/';

const fetchBaseQueryWithAuth = fetchBaseQuery({
  baseUrl: BASE_API,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const initialApiService = createApi({
  reducerPath: API_NAME,
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API, credentials: 'include' }),
  endpoints: () => ({}),
  tagTypes: SERVICE_TAGS_LIST,
});

export const initialApiServiceWithAuth = createApi({
  reducerPath: API_NAME,
  baseQuery: fetchBaseQueryWithAuth,
  endpoints: () => ({}),
  tagTypes: SERVICE_TAGS_LIST,
});
