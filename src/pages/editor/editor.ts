import './editor.css';

import template from './editor.tmpl';
import Templator from '../../utils/templator';

import Input from '../../components/input';

import Block from '../../utils/block';

import { getFormData, isFormValid } from '../../utils/formUtils';
import UsersController from '../../controllers/UsersController';
import { TUserData } from '../../types';

export default class Editor extends Block {
  onSubmit(e: Event) {
    e.preventDefault();

    const formData = getFormData(this.getContent()!) as TUserData;

    if (isFormValid(formData)) {
      UsersController.updateData(formData);
    }
  }

  render() {
    return new Templator(template).compile({ Input, onSubmit: this.onSubmit.bind(this) });
  }
}
