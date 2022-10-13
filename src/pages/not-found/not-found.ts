import './not-found.css';

import template from './not-found.tmpl';
import Templator from '../../utils/templator';

import Block from '../../utils/block';
import Link from '../../components/link';

export default class NotFound extends Block {
  constructor() {
    super();
  }

  render() {
    return new Templator(template).compile({ Link });
  }
}
