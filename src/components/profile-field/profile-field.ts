import './profile-field.css';

import template from './profile-field.tmpl';
import Templator from '../../utils/templator';

import Block from '../../utils/block';

interface ProfileFieldProps {
  name: string,
  value: string
}
export default class ProfileField extends Block {
  constructor(props: ProfileFieldProps) {
    super(props);
  }

  render() {
    return new Templator(template).compile(this.props);
  }
}
