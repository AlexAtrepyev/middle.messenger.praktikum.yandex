import './main.css';

import template from './main.tmpl';
import Templator from '../../utils/templator';

import Chat from '../../components/chat';
import Message from '../../components/message';

import Block from '../../utils/block';

export default class Main extends Block {
  constructor() {
    super();
  }
  
  render() {
    return new Templator(template).compile({ Chat, Message });
  }
}
