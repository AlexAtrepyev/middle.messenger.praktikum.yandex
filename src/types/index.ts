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

export type TUserEditorData = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string
  email: string;
  phone: string;
};

export type TChangePasswordData = {
  oldPassword: string;
  newPassword: string;
};

export type TChatUsers = {
  users: number[];
  chatId: number;
};

export type TUser = {
  avatar: string | null;
  display_name: string | null;
  email: string;
  first_name: string;
  id: number;
  login: string;
  phone: string;
  second_name: string;
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
    };
    time: string;
    content: string;
  };
  title: string;
  unread_count: number;
};

export type TMessage = {
  id: number;
  chat_id?: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  is_read?: boolean;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
};

export type TState = {
  user?: TUser;
  chats?: TChat[];
  selectedChat?: number;
  messages?: Record<number, TMessage[]>;
};
