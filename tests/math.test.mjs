import assert from 'node:assert/strict';
import test from 'node:test';
import { mdxToJs } from 'satteri';
import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';
import math from '../src/plugins/math.mjs';

test('equations render inline and in display blocks without breaking paragraphs', async () => {
  const renderer = await createSatteriMarkdownProcessor({
    syntaxHighlight: false,
    features: { math: true },
    hastPlugins: [math],
  });
  const { code } = await renderer.render(String.raw`Aperture $f/n$, area $r^2$, and $\sqrt{2}$.

$$
\frac{f}{n}
$$

Prices are \$400 and \$700.`);

  assert.match(code, /<msup>/);
  assert.match(code, /<msqrt>/);
  assert.match(code, /<mfrac>/);
  assert.match(code, /class="katex-display"/);
  assert.match(code, /<p>Aperture <span class="katex">/);
  assert.match(code, /Prices are \$400 and \$700/);
  assert.doesNotMatch(code, /katex-error|math-inline|<p>\s*<p>/);
});

test('math also compiles in MDX with TeX braces preserved', async () => {
  const result = await mdxToJs(String.raw`Inline $\sqrt{2}$ and $r^{2}$.`, {
    features: { math: true },
    hastPlugins: [math],
  });
  assert.match(result.code, /msqrt/);
  assert.match(result.code, /msup/);
});
