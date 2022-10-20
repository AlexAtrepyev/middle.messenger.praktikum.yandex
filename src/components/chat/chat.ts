import './chat.scss';

import template from './chat.tmpl';
import Templator from '../../utils/templator';

import Block from '../../utils/block';
import { TChat } from '../../types';
import ChatsController from '../../controllers/ChatsController';
import store, { StateEvents } from '../../utils/Store';

export default class Chat extends Block {
  constructor(props: TChat) {
    super(props);
  }

  onClick() {
    ChatsController.selectChat(this.props.id);
  }

  render() {
    return new Templator(template).compile({
      ...this.props,
      isSelected: store.getState().selectedChat === this.props.id ? 'chat_selected' : '',
      onClick: this.onClick.bind(this),
      last_message: this.props.last_message ? this.props.last_message.content : '',
      time: this.props.last_message ? this.props.last_message.time.slice(11, -9) : '',
    });
  }
}
