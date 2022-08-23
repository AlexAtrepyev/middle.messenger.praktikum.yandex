import './not-found.css';

import template from './not-found.tmpl';
import Templator from '../../utils/templator';

const templator = new Templator(template);

export default templator.compile({});
