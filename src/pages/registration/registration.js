import './registration.css';

import template from './registration.tmpl';
import Templator from '../../utils/templator';

import inputTmpl from '../../components/input';

const templator = new Templator(template);

const context = {
  firstName: inputTmpl.compile({ label: 'First name', type: 'text', name: 'first_name' }),
  secondName: inputTmpl.compile({ label: 'Second name', type: 'text', name: 'second_name' }),
  login: inputTmpl.compile({ label: 'Login', type: 'text', name: 'login' }),
  email: inputTmpl.compile({ label: 'Email', type: 'email', name: 'email' }),
  password: inputTmpl.compile({ label: 'Password', type: 'password', name: 'password' }),
  phone: inputTmpl.compile({ label: 'Phone', type: 'number', name: 'phone' })
};

export default templator.compile(context);
