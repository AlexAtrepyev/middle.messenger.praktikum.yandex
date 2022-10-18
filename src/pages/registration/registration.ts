import './registration.css';

import template from './registration.tmpl';
import Templator from '../../utils/templator';

import Input from '../../components/input';
import Link from '../../components/link';

import AuthController from '../../controllers/AuthController';

import Block from '../../utils/block';

import { getFormData, isFormValid } from '../../utils/formUtils';
import { TSignupData } from '../../types';

export default class Registration extends Block {
  onSubmit(e: Event) {
    e.preventDefault();

    const formData = getFormData(this.getContent()!) as TSignupData;

    if (isFormValid(formData)) {
      AuthController.signup(formData);
    }
  }

  render() {
    return new Templator(template).compile({ Input, Link, onSubmit: this.onSubmit.bind(this) });
  }
}
