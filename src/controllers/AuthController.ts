import api, { AuthApi } from '../api/AuthApi';
import { TSigninData, TSignupData } from '../types';
import Router from '../utils/Router';
import store from '../utils/Store';
import MessagesController from './MessagesController';

export class AuthController {
  private readonly api: AuthApi;

  constructor() {
    this.api = api;
  }

  async signin(data: TSigninData) {
    try {
      await this.api.signin(data);
      await this.getUser();
      Router.go('/messenger');
    } catch (e) {
      console.error(e.reason);
    }
  }

  async signup(data: TSignupData) {
    try {
      await this.api.signup(data);
      await this.getUser();
      Router.go('/messenger');
    } catch (e) {
      console.error(e.reason);
    }
  }

  async getUser() {
    const user = await this.api.getUser();

    store.set('user', user);
  }

  async logout() {
    try {
      MessagesController.closeAll();
      await this.api.logout();
      Router.go('/');
    } catch (e) {
      console.error(e.reason);
    }
  }
}

export default new AuthController();
