import './chat.css';

import template from './chat.tmpl';
import Templator from '../../utils/templator';

import Block from '../../utils/block';

interface ChatProps {
  avatar: string,
  title: string,
  last_message: string,
  time: string,
  unread_count: number
}

export default class Chat extends Block {
  constructor(props: ChatProps) {
    super(props);
  }

  render() {
    return new Templator(template).compile(this.props);
  }
}
