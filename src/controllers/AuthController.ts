import api, { AuthApi } from '../api/AuthApi';
import { TSigninData, TSignupData } from '../types';
import Router from '../utils/Router';
import store from '../utils/Store';

export class AuthController {
  private readonly api: AuthApi;

  constructor() {
    this.api = api;
  }

  async signin(data: TSigninData) {
    await this.api.signin(data);

    await this.getUser();

    Router.go('/settings');
  }

  async signup(data: TSignupData) {
    await this.api.signup(data);

    await this.getUser();

    Router.go('/settings');
  }

  async getUser() {
    const user = await this.api.getUser();

    store.set('user', user);
  }

  async logout() {
    await this.api.logout();

    Router.go('/');
  }
}

export default new AuthController();
