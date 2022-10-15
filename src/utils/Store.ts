import EventBus from './eventBus';
import set from './set';
import Block from './block';
import isEqual from './isEqual';

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
  chats?: {
    avatar: string | null;
    created_by: number;
    id: number;
    last_message: any;
    title: string;
    unread_count: number;
  }[]
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

export function withStore(mapStateToProps: (state: any) => any) {
  return function wrap(Component: typeof Block) {
    let previousState: any;

    return class WithStore extends Component {
      constructor(props: any) {
        previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState });

        store.on(StateEvents.UPDATED, () => {
          const stateProps = mapStateToProps(store.getState());

          if (isEqual(previousState, stateProps)) {
            return;
          }
          previousState = stateProps;

          this.setProps({ ...stateProps });
        });
      }
    };
  };
}

export default store;
