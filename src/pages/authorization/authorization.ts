import './authorization.css';

import template from './authorization.tmpl';
import Templator from '../../utils/templator';

import Input from '../../components/input';
import Link from '../../components/link';

import Block from '../../utils/block';

import { getFormData, isFormValid } from '../../utils/formUtils';

export default class Authorization extends Block {
  constructor() {
    super();
  }

  onSubmit(e: Event) {
    e.preventDefault();

    const formData = getFormData(this.getContent()!);

    if (isFormValid(formData)) {
      console.log(formData);
    }
  }

  render() {
    return new Templator(template).compile({ Input, Link, onSubmit: this.onSubmit.bind(this) });
  }
}
