export type TSigninData = {
  login: string;
  password: string;
};

export type TSignupData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type TUserData = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string
  email: string;
  phone: string;
};

export type TUserPasswords = {
  oldPassword: string;
  newPassword: string;
};

export type TChatUsers = {
  users: number[],
  chatId: number
};
