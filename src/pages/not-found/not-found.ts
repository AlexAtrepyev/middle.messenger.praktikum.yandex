import './not-found.css';

import template from './not-found.tmpl';
import Templator from '../../utils/templator';

import Block from '../../utils/block';

export default class NotFound extends Block {
  constructor() {
    super();
  }
  
  render() {
    return new Templator(template).compile({});
  }
}
