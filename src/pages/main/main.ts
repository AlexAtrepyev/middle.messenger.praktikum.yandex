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

export default class Main extends Block {
  constructor() {
    super(store.getState().chats || []);
  }

  init() {
    ChatsController.get();

    store.on(StateEvents.UPDATED, () => {
      // painful crutch
      const chats = store.getState().chats!.map((chat) => new Chat({
        avatar: chat.avatar ? `https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}` : '#',
        title: chat.title,
        last_message: chat.last_message?.content,
        time: chat.last_message?.time,
        unread_count: chat.unread_count,
      }).getContent());

      const chatList = document.createElement('ul');
      chatList.classList.add('chats');
      chats.forEach((chat) => {
        chatList.appendChild(chat!);
      });

      this.setProps({ chatList });
    });
  }

  createChat() {
    ChatsController.create('Test2');
  }

  AddUser() {
    ChatsController.addUsers({ users: [1], chatId: 180 });
  }

  RemoveUser() {
    ChatsController.removeUsers({ users: [1], chatId: 180 });
  }

  onSubmit(e: Event) {
    e.preventDefault();

    const formData = getFormData(this.getContent()!);

    if (isFormValid(formData)) {
      console.log(formData);
    }
  }

  render() {
    return new Templator(template).compile({
      onCreateChat: this.createChat.bind(this),
      onAddUser: this.AddUser.bind(this),
      onRemoveUser: this.RemoveUser.bind(this),
      onSubmit: this.onSubmit.bind(this),
      Message,
      Link,
      ...this.props,
    });
  }
}
