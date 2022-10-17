import BaseApi from './BaseApi';
import { TUserEditorData, TChangePasswordData } from '../types';

export class UsersApi extends BaseApi {
  constructor() {
    super('/user');
  }

  updateData(data: TUserEditorData) {
    return this.http.put('/profile', { data });
  }

  updateAvatar(data: File) {
    return this.http.put('/profile/avatar', { data });
  }

  updatePassword(data: TChangePasswordData) {
    return this.http.put('/password', { data });
  }

  create = undefined;

  read = undefined;

  update = undefined;

  delete = undefined;
}

export default new UsersApi();
