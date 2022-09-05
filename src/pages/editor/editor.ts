import './editor.css';

import template from './editor.tmpl';
import Templator from '../../utils/templator';

import Input from '../../components/input';

import Block from '../../utils/block';

export default class Editor extends Block {
  constructor() {
    super();
  }
  
  render() {
    return new Templator(template).compile({ Input });
  }
}
