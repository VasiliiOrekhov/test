import { SERVICE_TAGS } from 'constants/serviceTags';
import { initialApiService } from '../initialApiService';
import { TSignInRequest, TUser } from './models';

const authApiService = initialApiService.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<TUser, void>({
      query: () => ({ url: 'auth/user', method: 'GET' }),
      providesTags: [SERVICE_TAGS.USER],
    }),
    singIn: build.mutation<string, TSignInRequest>({
      query: (signInData) => ({
        url: 'auth/signin',
        method: 'POST',
        body: signInData,
        responseHandler: 'text',
      }),
    }),
    getActions: build.query<string[], void>({
      query: () => ({ url: 'auth/actions', method: 'GET' }),
    }),
    logout: build.mutation<string, void>({
      query: () => ({ url: 'auth/logout', method: 'POST', responseHandler: 'text' }),
    }),
  }),
});

export const { useGetUserQuery, useLazyGetUserQuery, useSingInMutation, useLogoutMutation } =
  authApiService;
