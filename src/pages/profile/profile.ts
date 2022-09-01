import './profile.css';

import template from './profile.tmpl';
import Templator from '../../utils/templator';

import ProfileField from '../../components/profile-field';

const templator = new Templator(template);

const context = { ProfileField };

export default templator.compile(context);
