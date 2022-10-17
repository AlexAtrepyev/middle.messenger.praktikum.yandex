import BaseApi from './BaseApi';
import { TChat, TChatUsers } from '../types';

export class ChatsApi extends BaseApi {
  constructor() {
    super('/chats');
  }

  get() {
    return this.http.get<{ chats: TChat[] }>('');
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

  async getToken(id: number) {
    return this.http.post<{ token: string }>(`/token/${id}`).then((res) => res.token);
  }

  read = undefined;

  update = undefined;

  delete = undefined;
}

export default new ChatsApi();
