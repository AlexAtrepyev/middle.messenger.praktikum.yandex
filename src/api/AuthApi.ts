import BaseApi from './BaseApi';
import { TSigninData, TSignupData } from '../types';

export class AuthApi extends BaseApi {
  constructor() {
    super('/auth');
  }

  signin(data: TSigninData) {
    return this.http.post('/signin', { data });
  }

  signup(data: TSignupData) {
    return this.http.post('/signup', { data });
  }

  getUser() {
    return this.http.get('/user');
  }

  logout() {
    return this.http.post('/logout');
  }

  create = undefined;

  read = undefined;

  update = undefined;

  delete = undefined;
}

export default new AuthApi();
