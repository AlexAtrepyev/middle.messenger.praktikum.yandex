import './message.css';

import template from './message.tmpl';
import Templator from '../../utils/templator';

import Block from '../../utils/block';
import { TMessage } from '../../types';

export default class Message extends Block {
  constructor(props: TMessage) {
    super(props);
  }

  render() {
    return new Templator(template).compile({ ...this.props, time: this.props.time.slice(11, -9) });
  }
}
