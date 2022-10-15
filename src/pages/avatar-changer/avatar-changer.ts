import './avatar-changer.css';

import template from './avatar-changer.tmpl';
import Templator from '../../utils/templator';

import Block from '../../utils/block';
import UsersController from '../../controllers/UsersController';

export default class AvatarChanger extends Block {
  onSave() {
    const files = document.querySelector('input')?.files;

    if (files) {
      UsersController.updateAvatar(files[0]);
    }
  }

  render() {
    return new Templator(template).compile({ onSave: this.onSave.bind(this) });
  }
}
