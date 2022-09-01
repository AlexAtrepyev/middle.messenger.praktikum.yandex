import './main.css';

import template from './main.tmpl';
import Templator from '../../utils/templator';

import Chat from '../../components/chat';
import Message from '../../components/message';

const templator = new Templator(template);

const context = { Chat, Message };

export default templator.compile(context);
