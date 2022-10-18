import './main.css';

import template from './main.tmpl';
import Templator from '../../utils/templator';

import Chat from '../../components/chat';
import Message from '../../components/message';

import Block from '../../utils/block';
import Link from '../../components/link';

import { getFormData, isFormValid } from '../../utils/formUtils';
import ChatsController from '../../controllers/ChatsController';
import store, { StateEvents } from '../../utils/Store';
import AuthController from '../../controllers/AuthController';
import MessagesController from '../../controllers/MessagesController';
import { TMessage } from '../../types';

export default class Main extends Block {
  constructor() {
    super(store.getState().chats || []);
  }

  init() {
    AuthController.getUser();
    ChatsController.get();

    store.on(StateEvents.UPDATED, () => {
      // painful crutch
      const chatList = document.createElement('ul');
      chatList.classList.add('chats');

      store.getState().chats?.forEach((chat) => {
        chatList.appendChild(new Chat({
          ...chat,
          avatar: chat.avatar ? `https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}` : '#',
        }).getContent()!);
      });

      this.setProps({ chatList });

      const { messages, selectedChat } = store.getState();
      if (messages && selectedChat) {
        let selectedMessages: TMessage[] = [];
        if (messages[selectedChat]) {
          selectedMessages = messages[selectedChat].filter(
            (message) => message?.id !== undefined,
          );
        }

        const messageList = document.createElement('div');
        messageList.classList.add('feed__messages');

        selectedMessages.reverse().forEach((message) => {
          messageList.appendChild(new Message({
            ...message,
            type: message.user_id === store.getState().user?.id ? 'mine' : 'others',
          }).getContent()!);
        });

        this.setProps({ messageList });
      }
    });
  }

  createChat() {
    const { value } = document.querySelector('#chatTitle') as HTMLInputElement;

    if (isFormValid({ message: value })) {
      ChatsController.create(value);
    }
  }

  addUser() {
    const { value } = document.querySelector('#addUser') as HTMLInputElement;

    const { selectedChat } = store.getState();

    if (Number(value) && selectedChat) {
      ChatsController.addUsers({ users: [Number(value)], chatId: selectedChat });
    }
  }

  removeUser() {
    const { value } = document.querySelector('#removeUser') as HTMLInputElement;

    const { selectedChat } = store.getState();

    if (Number(value) && selectedChat) {
      ChatsController.removeUsers({ users: [Number(value)], chatId: selectedChat });
    }
  }

  onSubmit(e: Event) {
    e.preventDefault();

    const formData = getFormData(this.getContent()!);

    if (isFormValid(formData)) {
      MessagesController.sendMessage(store.getState().selectedChat!, formData.message);
    }
  }

  render() {
    return new Templator(template).compile({
      chatTitle: store.getState().chats?.find(
        (chat) => chat.id === store.getState().selectedChat,
      )?.title || '',
      onCreateChat: this.createChat.bind(this),
      onAddUser: this.addUser.bind(this),
      onRemoveUser: this.removeUser.bind(this),
      onSubmit: this.onSubmit.bind(this),
      Link,
      ...this.props,
    });
  }
}
