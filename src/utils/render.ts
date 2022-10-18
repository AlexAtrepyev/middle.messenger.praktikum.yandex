import Block from './block';

export default function render(query: string, block: Block): Element {
  const root = document.querySelector(query);

  if (root === null) {
    throw new Error(`${query} not found`);
  }

  root.innerHTML = '';
  root.appendChild(block.getContent()!);

  return root;
}
