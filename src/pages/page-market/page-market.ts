import './page-market.scss';

import template from './page-market.tmpl';
import Templator from '../../utils/templator';

import Block from '../../utils/block';

type PageMarketProps = { [key: string]: () => void }

export default class PageMarket extends Block {
  constructor(props: PageMarketProps) {
    super(props);
  }

  render() {
    return new Templator(template).compile(this.props);
  }
}
