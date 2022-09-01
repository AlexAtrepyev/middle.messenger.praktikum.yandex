import './server-error.css';

import template from './server-error.tmpl';
import Templator from '../../utils/templator';

const templator = new Templator(template);

export default templator.compile({});
