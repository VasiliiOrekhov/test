export type TUser = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};

export type TSignInRequest = {
  login: string;
  password: string;
};

export type TSignInResponse = {
  access: string;
  refresh: string;
};

export type TRefreshResponse = {
  access: string;
};
export type TRefreshRequest = {
  refresh: string;
};
