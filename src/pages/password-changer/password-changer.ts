import './password-changer.css';

import template from './password-changer.tmpl';
import Templator from '../../utils/templator';

import Input from '../../components/input';

import Block from '../../utils/block';

import { getFormData, isFormValid } from '../../utils/formUtils';
import UsersController from '../../controllers/UsersController';
import { TChangePasswordData } from '../../types';

export default class PasswordChanger extends Block {
  onSubmit(e: Event) {
    e.preventDefault();

    const formData = getFormData(this.getContent()!) as TChangePasswordData;

    if (isFormValid(formData)) {
      UsersController.updatePassword(formData);
    }
  }

  render() {
    return new Templator(template).compile({ Input, onSubmit: this.onSubmit.bind(this) });
  }
}
