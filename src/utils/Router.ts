import Block from './block';

function render(query: string, block: Block): Element {
  const root = document.querySelector(query);

  if (root === null) {
    throw new Error(`${query} not found`);
  }

  root.innerHTML = '';
  root.appendChild(block.getContent()!);

  return root;
}

class Route {
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

class Router {
  private static __instance: Router;

  private routes: Route[] = [];

  private currentRoute: Route | null = null;

  private history: History = window.history;

  private rootQuery: string | null = null;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, this.rootQuery!);
    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;
      this.onRoute(target.location.pathname);
    };

    this.onRoute(window.location.pathname);
  }

  private onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this.currentRoute) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;

    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this.onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  private getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default new Router('body');
