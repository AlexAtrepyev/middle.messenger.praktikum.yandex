import './profile.css';

import template from './profile.tmpl';
import Templator from '../../utils/templator';

import profileFieldTmpl from '../../components/profile-field';

const templator = new Templator(template);

const context = {
  first_name: profileFieldTmpl.compile({ name: 'First name', value: 'First name' }),
  second_name: profileFieldTmpl.compile({ name: 'Last name', value: 'Last name' }),
  display_name: profileFieldTmpl.compile({ name: 'Display name', value: 'nickname' }),
  login: profileFieldTmpl.compile({ name: 'Login', value: 'user' }),
  email: profileFieldTmpl.compile({ name: 'Email', value: 'pochta@mail.ru' }),
  phone: profileFieldTmpl.compile({ name: 'Phone', value: '+1234567890' })
};

export default templator.compile(context);
