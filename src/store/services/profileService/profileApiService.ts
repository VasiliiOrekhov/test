import { SERVICE_TAGS } from 'constants/serviceTags';
import { initialApiService } from '../initialApiService';
import { TProfile } from './models';

const profileApiService = initialApiService.injectEndpoints({
  endpoints: (build) => ({
    changeUser: build.mutation<string, TProfile>({
      query: (profileData) => ({
        url: 'user/profile',
        method: 'PUT',
        body: profileData,
        responseHandler: 'text',
      }),
      invalidatesTags: [SERVICE_TAGS.USER],
    }),
    // logout: build.mutation<string, void>({
    //   query: () => ({ url: 'auth/logout', method: 'POST', responseHandler: 'text' }),
    // }),
  }),
});

export const { useChangeUserMutation } = profileApiService;
