import './authorization.css';

import template from './authorization.tmpl';
import Templator from '../../utils/templator';

import Input from '../../components/input';
import Link from '../../components/link';

import AuthController from '../../controllers/AuthController';

import Block from '../../utils/block';

import { getFormData, isFormValid } from '../../utils/formUtils';
import { TSigninData } from '../../types';

export default class Authorization extends Block {
  onSubmit(e: Event) {
    e.preventDefault();

    const formData = getFormData(this.getContent()!) as TSigninData;

    if (isFormValid(formData)) {
      AuthController.signin(formData);
    }
  }

  render() {
    return new Templator(template).compile({ Input, Link, onSubmit: this.onSubmit.bind(this) });
  }
}
