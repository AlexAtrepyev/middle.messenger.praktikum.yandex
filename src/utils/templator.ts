import isEmpty from './isEmpty';
import last from './last';
import sort from './sort';

type TBorders = {
  start: number,
  end: number
};

type TVirtualDom = {
  borders: TBorders,
  children: Array<TVirtualDom>,
  tag?: string,
  attrs?: { [key: string]: any },
  textContent?: string,
  element?: HTMLElement
};

function getHtmlSplited(str: string): string[] {
  return str.split('\n').reduce((acc: string[], item) => {
    const line: string = item.trim();
    if (!isEmpty(line)) {
      acc.push(line);
    }
    return acc;
  }, []);
}

function isTag(str: string) {
  const regex = /^<.+?>/i;

  return regex.test(str);
}

function getTagType(str: string): string {
  const regex = /<(\/?\w+)/i;

  const key = regex.exec(str);
  if (key) {
    return key[1];
  } else {
    return '';
  }
}

function isClosingTag(str: string): boolean {
  return str[0] === '/';
}

function isSingleTag(str: string): boolean {
  const singleTags = ['img', 'input'];

  return singleTags.includes(str);
}

function isComponent(str: string): boolean {
  const regex = /^<.+?\/>$/i;

  return regex.test(str);
}

function findBorderByStart(arr: TBorders[], start: number): TBorders | undefined {
  return arr.find(item => item.start === start);
}

function getTagBorders(lines: string[]) {
  const stack: { index: number, tag: string }[] = [];
  const borders: TBorders[] = [];

  lines.forEach((line, index) => {
    if (isTag(line)) {
      const tag = getTagType(line);
      
      if (isClosingTag(tag)) {
        const lastTag = last(stack);

        if (lastTag) {
          if (lastTag.tag === tag.slice(1)) {
            borders.push({ start: lastTag.index, end: index });
            stack.pop();
          }
        }
      } else {
        if (isSingleTag(tag) || /<\/.+?>/i.test(line) || isComponent(line)) { // THERE
          borders.push({ start: index, end: index });
        } else {
          stack.push({ index, tag });
        }
      }
    }
  });

  const startBorders = sort(borders.map(border => border.start));
  
  return startBorders.reduce((acc: TBorders[], item) => {
    const border = findBorderByStart(borders, item);
    if (border) {
      acc.push(border);
    }
    return acc;
  }, []);
}

function findNodeByStart(node: TVirtualDom, start: number): TVirtualDom | undefined {
  if (node.borders.start === start) {
    return node;
  }
  
  for (let child of node.children) {
    const childNode = findNodeByStart(child, start);
    if (childNode) {
      return childNode;
    }
  }
}

function getHierarchy(borders: TBorders[]): TVirtualDom {
  let vDom: TVirtualDom | undefined = undefined;
  
  borders.forEach((item, index) => {
    let prevIndex = index;
    let hasParent = false;
    
    while (prevIndex--) {
      const prevItem = borders[prevIndex];
      
      if (item.start > prevItem.start && item.end < prevItem.end) {
        hasParent = true;

        if (vDom) {
          const node = findNodeByStart(vDom, prevItem.start);
          
          node && node.children.push({
            borders: { start: item.start, end: item.end },
            children: []
          });
        }
        
        break;
      }
    }
    
    if (!hasParent) {
      vDom = {
        borders: { start: item.start, end: item.end },
        children: []
      };
    }
  });

  if (!vDom) {
    throw new Error('Ошибка в шаблоне');
  }
  
  return vDom;
}

function getTag(str: string): string | undefined {
  const regex =  /^<(\w+)/i;

  const key = regex.exec(str);
  if (key) {
    return key[1];
  }

  return undefined;
}

function getAttrs(str: string): { [key: string]: string } | undefined {
  const regex = /(\w+)=\"([^"]+)\"/gi;

  const result: { [key: string]: string } = {};
  let key: RegExpExecArray | null;
  while ((key = regex.exec(str))) {
    if (key) {
      result[key[1]] = key[2];
    }
  }
  
  return isEmpty(result) ? undefined : result;
}

function getContent(str: string): string | undefined {
  const regex = /<.+?>(.+?)<\/.+?>/i;

  const result = regex.exec(str);
  if (result) {
    return isEmpty(result) ? undefined : result[1];
  }
}

function getVirtualDom(hierarchy: TVirtualDom, borders: TBorders[], array: string[]): TVirtualDom {
  borders.reverse().forEach(item => {
    const node = findNodeByStart(hierarchy, item.start);
    if (node) {
      const line = array[item.start];
    
      if (item.start === item.end) {
        node.tag = getTag(line);
        node.attrs = getAttrs(line);
        node.textContent = getContent(line);
      } else {
        node.tag = getTag(line);
        node.attrs = getAttrs(line);
        
        const multiLines = array.slice(item.start + 1, item.end);
        multiLines.forEach((multiLine, index) => {
          if (!isTag(multiLine)) {
            node.textContent = getContent(multiLine);
            // if (node.children) {
            //   node.children.splice(index, 0, { textNode: multiLine });
            //   array[item.start + 1 + index] = '<textNode>';
            // }
          }
        });
      }
    }
  });

  return hierarchy;
}

function getRenderOrder(vDom: TVirtualDom) {
  const stash: TVirtualDom[] = [];
  const order: { node: TVirtualDom, parent: TVirtualDom| undefined }[] = [];
  
  function fn(node: TVirtualDom) {
    order.push({ node, parent: last(stash) });
    stash.push(node);
    
    if (isEmpty(node.children)) {
      stash.pop();
    } else {
      for (let child of node.children) {
        fn(child);
      }
      stash.pop();
    }
  }
  
  fn(vDom);

  return order;
}

function startsWithUpperCase(str: string) {
  return str[0] === str[0].toUpperCase();
}

function get(obj: { [key: string]: any }, path: string): any {
  const keys = path.split('.');
  
  let result = obj;
  for (let key of keys) {
    result = result[key];
    
    if (result === undefined) {
      return undefined;
    }
  }
  
  return result;
}

function replaceTmplValues(tmpl: string, ctx: { [key: string]: any }): any {
  const regex = /\{\{(.*?)\}\}/gi;

  let key: any;
  while ((key = regex.exec(tmpl))) {
    if (key[1]) {
      let tmplValue = key[1].trim();
      const data = get(ctx, tmplValue);
      
      if (data) {
        // joining is required
        if (typeof data === "function") {
          tmpl = data;
          continue;
        }
        
        if (data.isHtml) {
          tmpl = data;
          continue;
        }
      }
      
      tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
    }
  }
  
  return tmpl;
}

function setElements(order: { node: TVirtualDom, parent: TVirtualDom | undefined }[], ctx: { [key: string]: any }) {
  order.forEach(item => {
    const node = item.node;
    
    if (node.tag) {
      if (startsWithUpperCase(node.tag)) {
        const tmpl = get(ctx, node.tag);
        node.element = tmpl.compile(node.attrs);
      } else {
        const element = document.createElement(node.tag);
        if (node.attrs) {
          Object.keys(node.attrs).forEach(key => {
            const value = replaceTmplValues(node.attrs![key], ctx)
            if (key === 'onclick') {
              element.addEventListener('click', value);
            } else {
              element.setAttribute(key, value);
            }
          });
        }
        if (node.textContent) {
          const value = replaceTmplValues(node.textContent, ctx)
          element.textContent = value;
        }
        
        node.element = element;
      }
    }
  });
}

function getHTML(order: { node: TVirtualDom, parent: TVirtualDom | undefined }[]): HTMLElement {
  order.forEach(item => {
    const { node, parent } = item;

    // what a crutch, man? refactoring is required
    if (parent && parent.element && node.element) {
      parent.element.appendChild(node.element);
    }
  });

  return order[0].node.element!;
}

export default class Templator {
  private tmpl: string;
  private virtualDom: TVirtualDom;

  constructor(tmpl: string) {
    this.tmpl = tmpl;
    this.virtualDom = this.precompile();
  }

  private precompile(): TVirtualDom {
    const tmplArray = getHtmlSplited(this.tmpl);
    const tagBorders = getTagBorders(tmplArray);
    const hierarchy = getHierarchy(tagBorders);

    if (!hierarchy) {
      throw new Error('Ошибка в шаблоне');
    }
    
    return getVirtualDom(hierarchy, tagBorders, tmplArray);
  }

  compile(ctx: { [key: string]: any }): HTMLElement {
    const order = getRenderOrder(this.virtualDom);
    setElements(order, ctx);
    
    return getHTML(order);
  }
};
