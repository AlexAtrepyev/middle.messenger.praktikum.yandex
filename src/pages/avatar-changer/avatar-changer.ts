import './avatar-changer.css';

import template from './avatar-changer.tmpl';
import Templator from '../../utils/templator';

import Block from "../../utils/block";

export default class AvatarChanger extends Block {
  constructor() {
    super();
  }
  
  render() {
    return new Templator(template).compile({});
  }
}
