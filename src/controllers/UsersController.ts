import api, { UsersApi } from '../api/UsersApi';
import { TUserData, TUserPasswords } from '../types';
import Router from '../utils/Router';

export class UsersController {
  private readonly api: UsersApi;

  constructor() {
    this.api = api;
  }

  async updateData(data: TUserData) {
    await this.api.updateData(data);

    Router.go('/settings');
  }

  async updateAvatar(data: File) {
    await this.api.updateAvatar(data);

    Router.go('/settings');
  }

  async updatePassword(data: TUserPasswords) {
    await this.api.updatePassword(data);

    Router.go('/settings');
  }
}

export default new UsersController();
