import './password-changer.css';

import template from './password-changer.tmpl';
import Templator from '../../utils/templator';

import Input from '../../components/input';

import Block from "../../utils/block";

export default class PasswordChanger extends Block {
  constructor() {
    super();
  }
  
  render() {
    return new Templator(template).compile({ Input });
  }
}
