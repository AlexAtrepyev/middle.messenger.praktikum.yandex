import api, { UsersApi } from '../api/UsersApi';
import { TUserEditorData, TChangePasswordData } from '../types';
import Router from '../utils/Router';

export class UsersController {
  private readonly api: UsersApi;

  constructor() {
    this.api = api;
  }

  async updateData(data: TUserEditorData) {
    try {
      await this.api.updateData(data);

      Router.go('/settings');
    } catch (e) {
      console.error(e);
    }
  }

  async updateAvatar(data: File) {
    try {
      await this.api.updateAvatar(data);

      Router.go('/settings');
    } catch (e) {
      console.error(e);
    }
  }

  async updatePassword(data: TChangePasswordData) {
    try {
      await this.api.updatePassword(data);

      Router.go('/settings');
    } catch (e) {
      console.error(e);
    }
  }
}

export default new UsersController();
