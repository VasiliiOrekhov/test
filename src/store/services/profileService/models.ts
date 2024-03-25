import { TUser } from '../userService/models';

export type TProfile = Omit<TUser, 'password' | 'id' | 'avatar'>;
