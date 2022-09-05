import './input.css';

import template from './input.tmpl';
import Templator from '../../utils/templator';

import Block from "../../utils/block";

interface InputProps {
  label: string,
  type: string,
  name: string
}

export default class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return new Templator(template).compile(this.props);
  }
}
