import { initialApiService } from '../initialApiService';
type TUser = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const postsApiService = initialApiService.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<TUser[], { page: number }>({
      query: ({ page }) => ({ url: `/posts?_limit=10&_page=${page}`, method: 'GET' }),
    }),
  }),
});

export const { useLazyGetPostsQuery } = postsApiService;
