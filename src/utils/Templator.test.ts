import { expect } from 'chai';
import Templator from './templator';

describe('Templator', () => {
  it('should compile HTML element', () => {
    const template = '<span>{{ text }}</span>';

    const element = new Templator(template).compile({ text: 'some text' });

    expect(element).to.be.instanceof(window.HTMLElement);
  });
});
