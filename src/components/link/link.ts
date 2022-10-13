import './link.css';

import template from './link.tmpl';
import Templator from '../../utils/templator';

import Block from '../../utils/block';
import Router from '../../utils/Router';

type LinkProps = {
  text: string,
  to: string
}

export default class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  navigate() {
    Router.go(this.props.to as string);
  }

  render() {
    return new Templator(template).compile({ ...this.props, navigate: this.navigate.bind(this) });
  }
}
