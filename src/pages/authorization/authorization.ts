import './authorization.css';

import template from './authorization.tmpl';
import Templator from '../../utils/templator';

import Input from '../../components/input';

import Block from "../../utils/block";

export default class Authorization extends Block {
  constructor() {
    super();
  }
  
  render() {
    return new Templator(template).compile({ Input });
  }
}
