import BaseApi from './BaseApi';
import { TChatUsers } from '../types';

export class ChatsApi extends BaseApi {
  constructor() {
    super('/chats');
  }

  get() {
    return this.http.get('');
  }

  create(title: string) {
    return this.http.post('', { data: { title } });
  }

  addUsers(data: TChatUsers) {
    return this.http.put('/users', { data });
  }

  removeUsers(data: TChatUsers) {
    return this.http.delete('/users', { data });
  }

  read = undefined;

  update = undefined;

  delete = undefined;
}

export default new ChatsApi();
