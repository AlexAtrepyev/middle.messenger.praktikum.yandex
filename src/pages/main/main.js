import './main.css';

import template from './main.tmpl';
import Templator from '../../utils/templator';

import chatTmpl from '../../components/chat';
import messageTmpl from '../../components/message';

import messages from '../../mocks/messages';

const templator = new Templator(template);

const context = {
  chat_1: chatTmpl.compile({ name: 'Alex', message: 'Hello', text: 'link', time: '11.03.22', count: 1 }),
  chat_2: chatTmpl.compile({ name: 'Jack', message: 'See you later', text: 'link', time: '11.03.22', count: 3 }),
  chat_3: chatTmpl.compile({ name: 'Veronica', message: 'You are so pretty ;)', text: 'link', time: '11.03.22', count: 2 }),
};

messages.reverse().forEach((message, index) => {
  const { type, content } = message; 
  context[`message_${index + 1}`] = messageTmpl.compile({ type, content });
});

console.log(context);

export default templator.compile(context);
