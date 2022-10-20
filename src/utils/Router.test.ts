import { expect } from 'chai';
import Block from './block';
import Router from './Router';

const sinon = require('sinon');

describe('Router', () => {
  global.window.history.back = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
    }
  };

  global.window.history.forward = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
    }
  };

  let getContentFake: any;
  let BlockMock: any;

  beforeEach(() => {
    getContentFake = sinon.fake.returns(document.createElement('div'));

    BlockMock = class {
      getContent = getContentFake;
    } as unknown as typeof Block;
  });

  it('.use() should return Router instance', () => {
    const result = Router.use('/', BlockMock);

    expect(result).to.eq(Router);
  });

  it('.back() should render a page on history back action', () => {
    Router
      .use('/', BlockMock)
      .start();

    Router.back();

    expect(getContentFake.callCount).to.eq(2);
  });

  it('.back() should render a page on start', () => {
    Router
      .use('/', BlockMock)
      .start();

    expect(getContentFake.callCount).to.eq(1);
  });
});
