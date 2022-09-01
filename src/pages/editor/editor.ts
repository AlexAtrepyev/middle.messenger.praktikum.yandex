import './editor.css';

import template from './editor.tmpl';
import Templator from '../../utils/templator';

import Input from '../../components/input';

const templator = new Templator(template);

const context = { Input };

export default templator.compile(context);
