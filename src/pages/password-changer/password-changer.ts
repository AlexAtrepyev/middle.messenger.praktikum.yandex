import './password-changer.css';

import template from './password-changer.tmpl';
import Templator from '../../utils/templator';

import Input from '../../components/input';

const templator = new Templator(template);

const context = { Input };

export default templator.compile(context);
