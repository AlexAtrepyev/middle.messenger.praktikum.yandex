import BaseApi from './BaseApi';
import { TUserData, TUserPasswords } from '../types';

export class UsersApi extends BaseApi {
  constructor() {
    super('/user');
  }

  updateData(data: TUserData) {
    return this.http.put('/profile', { data });
  }

  updateAvatar(data: File) {
    return this.http.put('/profile/avatar', { data });
  }

  updatePassword(data: TUserPasswords) {
    return this.http.put('/password', { data });
  }

  create = undefined;

  read = undefined;

  update = undefined;

  delete = undefined;
}

export default new UsersApi();
