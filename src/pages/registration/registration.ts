import './registration.css';

import template from './registration.tmpl';
import Templator from '../../utils/templator';

import Input from '../../components/input';

import Block from "../../utils/block";

export default class Registration extends Block {
  constructor() {
    super();
  }
  
  render() {
    return new Templator(template).compile({ Input });
  }
}
