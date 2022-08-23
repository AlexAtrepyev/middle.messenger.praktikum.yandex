import isEmpty from './isEmpty';
import last from './last';
import sort from './sort';

function getHtmlSplited(str) {
  return str.split('\n').reduce((arr, item) => {
    const line = item.trim();
    if (!isEmpty(line)) {
      arr.push(line);
    }
    return arr;
  }, []);
}

function isTag(str) {
  const regex = /^<.+?>/i;

  return regex.test(str);
}

function isClosingTag(str) {
  return str[0] === '/';
}

function isSingleTag(str) {
  const singleTags = ['img', 'input'];

  return singleTags.includes(str);
}

function findBorderByStart(arr, start) {
  return arr.find(item => item.start === start);
}

function getTagBorders(lines) {
  const stack = [];
  const borders = [];

  lines.forEach((line, index) => {
    if (isTag(line)) {
      const tag = /<(\/?\w+)/i.exec(line)[1];
      
      if (isClosingTag(tag)) {
        const lastTag = last(stack);
        
        if (lastTag.tag === tag.slice(1)) {
          borders.push({ start: lastTag.index, end: index });
          stack.pop();
        }
      } else {
        if (isSingleTag(tag) | /<\/.+?>/i.test(line)) {
          borders.push({ start: index, end: index });
        } else {
          stack.push({ index, tag });
        }
      }
    }
  });

  const startBorders = sort(borders.map(border => border.start));
  
  return startBorders.reduce((arr, item) => {
    arr.push(findBorderByStart(borders, item));
    return arr;
  }, []);
}

function findNodeByStart(node, start) {
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

function getHierarchy(borders) {
  let vDom;
  
  borders.forEach((item, index) => {
    let prevIndex = index;
    let hasParent = false;
    
    while (prevIndex--) {
      const prevItem = borders[prevIndex];
      
      if (item.start > prevItem.start & item.end < prevItem.end) {
        hasParent = true;

        const node = findNodeByStart(vDom, prevItem.start);
        node.children.push({
          borders: { start: item.start, end: item.end },
          children: []
        });

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

  return vDom;
}

function getTag(str) {
  const regex =  /^<(\w+)/i;

  return regex.exec(str)[1];
}

function getAttrs(str) {
  const regex = /(\w+)=\"([^"]+)\"/gi;

  const result = {};
  while ((key = regex.exec(str))) {
    result[key[1]] = key[2];
  }
  
  return isEmpty(result) ? null : result;
}

function getContent(str) {
  const regex = /<.+?>(.+?)<\/.+?>/i;

  const result = regex.exec(str);

  return isEmpty(result) ? null : result[1];
}

function getVirtualDom(vDom, borders, arr) {
  borders.reverse().forEach(item => {
    const node = findNodeByStart(vDom, item.start);
    const line = arr[item.start];
    
    if (item.start === item.end) {
      node.tag = getTag(line);
      node.attrs = getAttrs(line);
      const content = getContent(line);
      if (content) {
        node.children.push({ textNode: content });
      }
    } else {
      node.tag = getTag(line);
      node.attrs = getAttrs(line);
      
      const multiLines = arr.slice(item.start + 1, item.end);
      multiLines.forEach((multiLine, index) => {
        if (!isTag(multiLine)) {
          node.children.splice(index, 0, { textNode: multiLine });
          arr[item.start + 1 + index] = '<textNode>';
        }
      });
    }
  });

  return vDom;
}

function getRenderOrder(vDom) {
  const stash = [];
  const order = [];

  function fn(node) {
    order.push({ node: node, parent: last(stash) });
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

function isTextNode(node) {
  if ('textNode' in node) {
    return true;
  } else {
    return false;
  }
}

function get(obj, path, defaultValue) {
  const keys = path.split('.');
  
  let result = obj;
  for (let key of keys) {
    result = result[key];
    
    if (result === undefined) {
      return defaultValue;
    }
  }
  
  return result ?? defaultValue;
}

function replaceTmplValues(tmpl, ctx) {
  const regex = /\{\{(.*?)\}\}/gi;

  let key = null;
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

export default class Templator {
  constructor(tmpl) {
    this._tmpl = tmpl;
    this._virtualDom = this._precompile();
  }

  _precompile() {
    const htmlSplited = getHtmlSplited(this._tmpl);
    const tagBorders = getTagBorders(htmlSplited);
    const hierarchy = getHierarchy(tagBorders);

    return getVirtualDom(hierarchy, tagBorders, htmlSplited);
  }

  compile(ctx) {
    const order = getRenderOrder(this._virtualDom);
    
    order.forEach(item => {
      const node = item.node;

      if (isTextNode(node)) {
        node.element = replaceTmplValues(node.textNode, ctx);
      } else {
        const element = document.createElement(node.tag);
        
        if (node.attrs) {
          Object.entries(node.attrs).forEach(([key, value]) => {
            element[key] = replaceTmplValues(value, ctx);
          });
        }
        
        node.element = element;
      }
    });
    
    order.forEach(item => {
      const { node, parent } = item;

      // what a crutch, man? refactoring is required
      if (parent) {
        if (isTextNode(node)) {
          if (node.element.isHtml) {
            parent.element.appendChild(node.element);
          } else {
            parent.element.textContent = node.element;
          }
        } else {
          parent.element.appendChild(node.element);
        }
      }
    });

    const html = order[0].node.element;

    html.isHtml = true;

    return html;
  }
};
