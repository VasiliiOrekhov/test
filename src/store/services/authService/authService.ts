import { initialApiService } from '../initialApiService';
import { TSignInRequest, TSignInResponse } from './models';

const authApiService = initialApiService.injectEndpoints({
  endpoints: (build) => ({
    singIn: build.mutation<TSignInResponse, TSignInRequest>({
      query: (signInData) => ({
        url: 'login',
        method: 'POST',
        body: signInData,
      }),
    }),
    resfesh: build.mutation<string, void>({
      query: () => ({ url: 'refresh', method: 'POST' }),
    }),
  }),
});

export const { useSingInMutation, useLogoutMutation } = authApiService;
