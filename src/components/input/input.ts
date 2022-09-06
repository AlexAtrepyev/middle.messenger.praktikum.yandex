import './input.css';

import template from './input.tmpl';
import Templator from '../../utils/templator';

import Block from "../../utils/block";

import isInputValid from '../../utils/isInputValid';

interface InputProps {
  label: string,
  type: string,
  name: string
}

export default class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  isValid(): boolean {
    const { name, value } = this.getContent()!.querySelector('input')!;

    return isInputValid(name, value);
  }

  toogleClass() {
    const input = this.getContent()!.querySelector('input')!;
    this.isValid() ? input.classList.remove('input__field_invalid') : input.classList.add('input__field_invalid');
  }
  
  render() {
    return new Templator(template).compile({ ...this.props, checkValidity: this.toogleClass.bind(this) });
  }
}
