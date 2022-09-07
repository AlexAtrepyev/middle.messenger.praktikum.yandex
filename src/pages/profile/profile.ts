import './profile.css';

import template from './profile.tmpl';
import Templator from '../../utils/templator';

import ProfileField from '../../components/profile-field';

import Block from '../../utils/block';

export default class Profile extends Block {
  constructor() {
    super();
  }

  render() {
    return new Templator(template).compile({ ProfileField });
  }
}
