import './message.css';

import template from './message.tmpl';
import Templator from '../../utils/templator';

import Block from "../../utils/block";

interface MessageProps {
  type: string,
  content: string
}

export default class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    return new Templator(template).compile(this.props);
  }
}
