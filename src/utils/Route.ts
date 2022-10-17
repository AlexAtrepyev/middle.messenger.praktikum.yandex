import Block from './block';
import render from './render';

export default class Route {
  private block: Block | null = null;

  private pathname: string;

  private readonly blockClass: typeof Block;

  private readonly props: string;

  constructor(pathname: string, view: typeof Block, props: string) {
    this.pathname = pathname;
    this.blockClass = view;
    this.props = props;
  }

  leave() {
    this.block = null;
  }

  match(pathname: string) {
    return pathname === this.pathname;
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass({});

      render(this.props, this.block);
      return;
    }
  }
}
