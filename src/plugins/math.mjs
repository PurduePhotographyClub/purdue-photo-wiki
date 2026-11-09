import katex from 'katex';
import { defineHastPlugin } from 'satteri';
import { fromHtml } from 'hast-util-from-html';

function renderMath(value, displayMode) {
  const html = katex.renderToString(value, {
    displayMode,
    output: 'htmlAndMathml',
    throwOnError: true,
    trust: false,
  });
  return fromHtml(html, { fragment: true }).children[0];
}

export default defineHastPlugin({
  name: 'wiki-math',
  element: {
    filter: ['pre', 'code'],
    visit(node, ctx) {
      const code = node.tagName === 'pre' ? node.children[0] : node;
      if (code?.type !== 'element' || code.tagName !== 'code') return;
      const classes = code.properties?.className ?? [];
      if (node.tagName === 'pre' && classes.includes('math-display')) {
        return renderMath(ctx.textContent(code), true);
      }
      if (node.tagName === 'code' && classes.includes('math-inline')) {
        return renderMath(ctx.textContent(node), false);
      }
    },
  },
});
