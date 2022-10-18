import EventBus from './eventBus';
import set from './set';
import { TState } from '../types';

export enum StateEvents {
  UPDATED = 'UPDATED'
}

class Store extends EventBus {
  private state: TState = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StateEvents.UPDATED, this.getState());
  }

  public clear() {
    this.state = {};
  }
}

export default new Store();
