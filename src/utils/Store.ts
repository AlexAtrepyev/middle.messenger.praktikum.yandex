import EventBus from './eventBus';
import set from './set';
import { TChat, TMessage } from '../types';

export enum StateEvents {
  UPDATED = 'UPDATED'
}

type TState = {
  user?: {
    avatar: string | null;
    display_name: string | null;
    email: string;
    first_name: string;
    id: number;
    login: string;
    phone: string;
    second_name: string;
  },
  chats?: TChat[],
  selectedChat?: number,
  messages?: {
    [key: string]: TMessage[]
  }
};

class Store extends EventBus {
  private state: TState = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StateEvents.UPDATED, this.getState());
  }
}

const store = new Store();

export default store;
