import { expect } from 'chai';
import Link from './index';
import Router from '../../utils/Router';

const sinon = require('sinon');

describe('Link component', () => {
  it('should return button element', () => {
    const link = new Link({ text: 'link text', to: '/' });
    const element = link.getContent();

    expect(element).to.be.instanceof(window.HTMLButtonElement);
  });

  it('should go to passed route on click', () => {
    const link = new Link({ text: 'link text', to: '/' });
    const spy = sinon.spy(Router, 'go');
    const element = link.element as HTMLButtonElement;

    element.click();

    expect(spy.calledOnce).to.eq(true);
  });
});
