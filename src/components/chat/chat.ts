import './chat.css';

import template from './chat.tmpl';
import Templator from '../../utils/templator';

import Block from "../../utils/block";

interface ChatProps {
  name: string,
  message: string,
  text: string,
  time: string,
  count: string
}

export default class Chat extends Block {
  constructor(props: ChatProps) {
    super(props);
  }

  render() {
    return new Templator(template).compile(this.props);
  }
}
