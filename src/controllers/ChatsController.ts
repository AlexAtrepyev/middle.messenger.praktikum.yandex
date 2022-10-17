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
    try {
      const chats = await this.api.get();
      store.set('chats', chats);

      store.getState().chats?.map(async (chat) => {
        const token = await api.getToken(chat.id);
        await MessagesController.connect(chat.id, token);
      });
    } catch (e) {
      console.error(e.reason);
    }
  }

  async create(data: string) {
    try {
      await this.api.create(data);
      await this.get();
    } catch (e) {
      console.error(e.reason);
    }
  }

  async addUsers(data: TChatUsers) {
    try {
      await this.api.addUsers(data);
    } catch (e) {
      console.error(e.reason);
    }
  }

  async removeUsers(data: TChatUsers) {
    try {
      await this.api.removeUsers(data);
    } catch (e) {
      console.error(e.reason);
    }
  }

  selectChat(id: number) {
    store.set('selectedChat', id);
  }
}

export default new ChatsController();
