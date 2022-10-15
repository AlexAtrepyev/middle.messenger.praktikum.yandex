import api, { ChatsApi } from '../api/ChatsApi';
import { TChatUsers } from '../types';
import store from '../utils/Store';
import MessagesController from './MessagesController';

export class ChatsController {
  private readonly api: ChatsApi;

  constructor() {
    this.api = api;
  }

  async get() {
    const chats = await this.api.get();

    store.set('chats', chats);

    store.getState().chats?.map(async (chat) => {
      const token = await api.getToken(chat.id);

      await MessagesController.connect(chat.id, token);
    });
  }

  async create(data: string) {
    await this.api.create(data);
  }

  async addUsers(data: TChatUsers) {
    await this.api.addUsers(data);
  }

  async removeUsers(data: TChatUsers) {
    await this.api.removeUsers(data);
  }

  selectChat(id: number) {
    store.set('selectedChat', id);
  }
}

export default new ChatsController();
