import './editor.css';

import template from './editor.tmpl';
import Templator from '../../utils/templator';

import inputTmpl from '../../components/input';

const templator = new Templator(template);

const context = {
  firstName: inputTmpl.compile({ label: 'First name', type: 'text', name: 'first_name' }),
  secondName: inputTmpl.compile({ label: 'Second name', type: 'text', name: 'second_name' }),
  displayName: inputTmpl.compile({ label: 'Display name', type: 'text', name: 'display_name' }),
  login: inputTmpl.compile({ label: 'Login', type: 'text', name: 'login' }),
  email: inputTmpl.compile({ label: 'Email', type: 'email', name: 'email' }),
  phone: inputTmpl.compile({ label: 'Phone', type: 'number', name: 'phone' })
};

export default templator.compile(context);
