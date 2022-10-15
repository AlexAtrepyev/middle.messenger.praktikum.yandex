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

export type TChat = {
  avatar: string | null;
  created_by: number;
  id: number;
  last_message: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string | null;
      email: string;
      login: string;
      phone: string;
    },
    time: string;
    content: string;
  };
  title: string;
  unread_count: number;
};

export type TMessage = {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  }
};
