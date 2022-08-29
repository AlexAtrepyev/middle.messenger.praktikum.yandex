import './authorization.css';

import template from './authorization.tmpl';
import Templator from '../../utils/templator';

import inputTmpl from '../../components/input';

const templator = new Templator(template);

const context = {
  login: inputTmpl.compile({ label: 'Login', type: 'text', name: 'login' }),
  password: inputTmpl.compile({ label: 'Password', type: 'password', name: 'password' })
};

export default templator.compile(context);
