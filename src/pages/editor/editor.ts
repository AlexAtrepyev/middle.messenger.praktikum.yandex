import './editor.css';

import template from './editor.tmpl';
import Templator from '../../utils/templator';

import Input from '../../components/input';

import Block from '../../utils/block';

import { getFormData, isFormValid } from '../../utils/formUtils';

export default class Editor extends Block {
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
    return new Templator(template).compile({ Input, onSubmit: this.onSubmit.bind(this) });
  }
}
