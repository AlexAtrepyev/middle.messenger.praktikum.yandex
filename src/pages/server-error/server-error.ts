import './server-error.css';

import template from './server-error.tmpl';
import Templator from '../../utils/templator';

import Block from '../../utils/block';
import Link from '../../components/link';

export default class ServerError extends Block {
  constructor() {
    super();
  }

  render() {
    return new Templator(template).compile({ Link });
  }
}
