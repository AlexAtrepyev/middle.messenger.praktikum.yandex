import './password-changer.css';

import template from './password-changer.tmpl';
import Templator from '../../utils/templator';

import inputTmpl from '../../components/input';

const templator = new Templator(template);

const context = {
  old_password: inputTmpl.compile({ label: 'Old password', type: 'password', name: 'oldPassword' }),
  new_password: inputTmpl.compile({ label: 'New password', type: 'password', name: 'newPassword' }),
  repeat_password: inputTmpl.compile({ label: 'Repeat password', type: 'password', name: 'repeatPassword' })
};

export default templator.compile(context);
