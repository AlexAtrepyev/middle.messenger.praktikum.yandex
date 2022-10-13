import './main.css';

import template from './main.tmpl';
import Templator from '../../utils/templator';

import Chat from '../../components/chat';
import Message from '../../components/message';

import Block from '../../utils/block';
import Link from '../../components/link';

import { getFormData, isFormValid } from '../../utils/formUtils';

export default class Main extends Block {
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
    return new Templator(template).compile({
      Chat,
      Message,
      Link,
      onSubmit: this.onSubmit.bind(this),
    });
  }
}
