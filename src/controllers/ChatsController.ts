import api, { ChatsApi } from '../api/ChatsApi';
import { TChatUsers } from '../types';
import store from '../utils/Store';

export class ChatsController {
  private readonly api: ChatsApi;

  constructor() {
    this.api = api;
  }

  async get() {
    const chats = await this.api.get();

    store.set('chats', chats);
  }

  async create(data: string) {
    await this.api.create(data);
  }

  async addUsers(data: TChatUsers) {
    console.log('daa');
    await this.api.addUsers(data);
  }

  async removeUsers(data: TChatUsers) {
    await this.api.removeUsers(data);
  }
}

export default new ChatsController();
