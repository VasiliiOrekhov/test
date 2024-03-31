import { initialApiServiceAuth } from '../initialApiServiceAuth';
import { TRefreshRequest, TRefreshResponse, TSignInRequest, TSignInResponse } from './models';

const authApiService = initialApiServiceAuth.injectEndpoints({
  endpoints: (build) => ({
    singIn: build.mutation<TSignInResponse, TSignInRequest>({
      query: (signInData) => ({
        url: '/auth/token/login/',
        method: 'POST',
        body: signInData,
      }),
    }),
    resfesh: build.mutation<TRefreshResponse, TRefreshRequest>({
      query: (refresh) => ({ url: '/auth/token/refresh', method: 'POST', body: refresh }),
    }),
  }),
});

export const { useSingInMutation, useResfeshMutation } = authApiService;
