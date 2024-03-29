import {
  BaseQueryApi,
  BaseQueryExtraOptions,
  BaseQueryFn,
} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchArgs, FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const BACKEND_V1_BASE_URL = '/testUrl';
const AUTH_ERROR_CODES = [401];

export const baseQueryWithReauth =
  (config: FetchBaseQueryArgs) =>
  async (
    args: FetchArgs | string,
    api: BaseQueryApi,
    extraOptions: BaseQueryExtraOptions<BaseQueryFn>,
  ) => {
    let result = await fetchBaseQuery(config)(args, api, extraOptions);

    if (result.error && AUTH_ERROR_CODES.includes(result.error.status as number)) {
      try {
        await userManager.signinSilent();
        result = await fetchBaseQuery(config)(args, api, extraOptions);
      } catch (e) {
        await userManager.signoutSilent();
      }
    }

    return result;
  };

export const BASE_QUERY_WITH_AUTH = baseQueryWithReauth({
  baseUrl: BACKEND_V1_BASE_URL,
  credentials: 'include',
  prepareHeaders: async (headers) => {
    const user = await userManager.getUser();
    const token = user?.access_token;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
