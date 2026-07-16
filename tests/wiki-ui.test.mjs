import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');

const preservedContentHashes = {
  'src/content/docs/index.md': 'cfb7b33ac16576c6fa3b615ecaa9834d4b43390797477483359d06d361ec3f5d',
  'src/content/docs/404.mdx': '4c4f52950848637bfa95d10aca41523f9fd6a048d227ed84bb36edcfe798e608',
  'src/content/docs/photography/index.md': '28c91c87cf340478a93de9c52b51b211e04067a2684fe179b66beb2c79dd0640',
  'src/content/docs/photography/anatomy-of-a-camera.md': '0348b15cd8374082f3861e55a760eb18f91a72e409a695e704656b84716751a7',
  'src/content/docs/photography/astrophotography.md': '11aa57b000cb4801d3f4828ed3f9d42f0170e1f464d2813b824a45eccc3754b3',
  'src/content/docs/photography/basics.md': 'e59add09fffb3da20fb32586f50c4cd1d6c7dc9a632ab7a256646244c4422046',
  'src/content/docs/photography/buying-guide-gear.md': '82690cd166a5d086ba3eb9b03faec81c2fe8f9a011c096f2e6722ef6f42b2e29',
  'src/content/docs/photography/composition.md': '0a246c0f9eafad591f6953aabae79f4b41c153cffa8b608c71b627df3d4b94c2',
  'src/content/docs/photography/editing.md': '99d513a13e333490f7802acdbbf01fccc64af89afab51ffe47f5f4caf1ef8d20',
  'src/content/docs/photography/film.md': 'ce43cb2bde50f9fd94767dc1efd6aa13aa025d6f2ab19a457e871f26bcef3c21',
  'src/content/docs/photography/helpful-resources.md': 'c8c704fcc2201d9526803cfe1314433898f53be3a3d9441d9e54a10d0d8af1d2',
  'src/content/docs/photography/technical.md': '2ff80a031d0d526eb472f9614b99d787253f865a92936aa64c78a2dcb8cb3fb6',
};

function readProjectFile(relativePath) {
  return readFileSync(join(projectRoot, relativePath), 'utf8');
}

function sourceFiles(directory, extensions) {
  return readdirSync(join(projectRoot, directory), { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && extensions.some((extension) => entry.name.endsWith(extension)))
    .map((entry) => join(entry.parentPath, entry.name));
}

function normalizeVisibleContent(source) {
  return source
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

test('the existing wiki prose remains unchanged during the UI migration', () => {
  for (const [relativePath, expectedHash] of Object.entries(preservedContentHashes)) {
    const visibleContent = normalizeVisibleContent(readProjectFile(relativePath));
    const actualHash = createHash('sha256').update(visibleContent).digest('hex');
    assert.equal(actualHash, expectedHash, `${relativePath} content changed`);
  }
});

test('the wiki uses a minimal Tailwind entry with no authored style blocks', () => {
  assert.equal(existsSync(join(projectRoot, 'src/styles/wiki.css')), false);

  const tailwindEntry = readProjectFile('src/styles/tailwind.css');
  assert.match(tailwindEntry, /@import ['"]tailwindcss['"]/);
  assert.doesNotMatch(tailwindEntry, /@layer\s+(?:base|components)/);

  const authoredUi = sourceFiles('src', ['.astro', '.md', '.mdx', '.ts', '.js'])
    .map((path) => readFileSync(path, 'utf8'))
    .join('\n');

  assert.doesNotMatch(authoredUi, /<style(?:\s|>)/);
  assert.doesNotMatch(authoredUi, /@apply\b|!important\b/);
});

test('content images reserve layout space and reference local assets that exist', () => {
  for (const path of sourceFiles('src/content/docs', ['.md', '.mdx'])) {
    const source = readFileSync(path, 'utf8');

    for (const image of source.matchAll(/<img\b[\s\S]*?>/g)) {
      assert.match(image[0], /\bwidth=/, `${path} has an image without a width`);
      assert.match(image[0], /\bheight=/, `${path} has an image without a height`);
    }

    for (const match of source.matchAll(/(?:src|image)=['"](\/images\/[^'"]+)['"]/g)) {
      assert.equal(existsSync(join(projectRoot, 'public', match[1])), true, `${path} references missing ${match[1]}`);
    }
  }
});

test('the responsive wiki shell is made from explicit Tailwind components', () => {
  const config = readProjectFile('astro.config.mjs');
  const pageFrame = readProjectFile('src/components/WikiPageFrame.astro');
  const header = readProjectFile('src/components/WikiHeader.astro');
  const themeProvider = readProjectFile('src/components/WikiThemeProvider.astro');

  assert.doesNotMatch(config, /\bPage:\s*['"]/);
  assert.match(config, /PageFrame:\s*['"]\.\/src\/components\/WikiPageFrame\.astro['"]/);
  assert.match(config, /ContentPanel:\s*['"]\.\/src\/components\/WikiContentPanel\.astro['"]/);
  assert.match(config, /TwoColumnContent:\s*['"]\.\/src\/components\/WikiTwoColumnContent\.astro['"]/);
  assert.match(config, /customCss:\s*\[['"]\.\/src\/styles\/tailwind\.css['"]\]/);
  assert.match(pageFrame, /lg:grid-cols-\[17rem_minmax\(0,1fr\)\]/);
  assert.match(pageFrame, /id="starlight__sidebar"/);
  assert.match(header, /aria-controls="starlight__sidebar"/);
  assert.match(header, /min-h-11/);
  assert.match(themeProvider, /dataset\.theme\s*=\s*['"]dark['"]/);
});

test('the system guide covers the complete service chain with accessible diagrams', () => {
  const systemPages = [
    'src/content/docs/system/index.mdx',
    'src/content/docs/system/requests-and-auth.mdx',
    'src/content/docs/system/data-and-media.mdx',
    'src/content/docs/system/discord.mdx',
    'src/content/docs/system/email-and-membership.mdx',
    'src/content/docs/system/automation.mdx',
    'src/content/docs/system/deployment-and-safety.mdx',
  ];

  for (const relativePath of systemPages) {
    assert.equal(existsSync(join(projectRoot, relativePath)), true, `${relativePath} is missing`);
  }

  const config = readProjectFile('astro.config.mjs');
  const diagrams = readProjectFile('src/components/SystemDiagram.astro');
  const technologies = readProjectFile('src/components/TechnologyGrid.astro');

  assert.match(config, /How the System Works/);
  assert.match(diagrams, /<figure aria-labelledby=/);
  assert.doesNotMatch(diagrams, /<figure role="img"/);
  assert.match(diagrams, /aria-labelledby=/);
  assert.match(diagrams, /data-no-expand/);
  assert.match(diagrams, /lane\.nodes\.length\s*<=\s*4/);
  assert.match(technologies, /\/images\/tech\//);
});

test('interactive polish avoids competing viewers and preserves accessible feedback', () => {
  const imageViewer = readProjectFile('src/components/WikiImageViewer.astro');
  const footer = readProjectFile('src/components/WikiFooter.astro');
  const pageTitle = readProjectFile('src/components/WikiPageTitle.astro');
  const notFound = readProjectFile('src/content/docs/404.mdx');
  const gettingStarted = readProjectFile('src/content/docs/photography/index.md');
  const header = readProjectFile('src/components/WikiHeader.astro');
  const sidebar = readProjectFile('src/components/WikiSidebar.astro');
  const sidebarToc = readProjectFile('src/components/WikiSidebarToc.astro');

  assert.match(imageViewer, /closest\(['"]a\[href\^=[^\n]+gs-view-/);
  assert.match(imageViewer, /addEventListener\(['"]hashchange['"]/);
  assert.match(imageViewer, /setAttribute\(['"]inert['"]/);
  assert.match(imageViewer, /event\.key\s*===\s*['"]Escape['"]/);
  assert.match(imageViewer, /history\.replaceState/);
  assert.match(imageViewer, /history\.back\(\)/);
  assert.match(imageViewer, /hashViewerOpenedFromTrigger/);
  assert.match(imageViewer, /classList\.remove\(['"]target:flex['"]\)/);
  assert.match(imageViewer, /classList\.add\(['"]target:flex['"]\)/);
  assert.doesNotMatch(imageViewer, /location\.hash\s*=/);
  assert.doesNotMatch(imageViewer, /previousTrigger\?\.focus\(\{\s*preventScroll/);
  assert.match(footer, /role=['"]status['"]/);
  assert.match(footer, /aria-live=['"]polite['"]/);
  assert.match(pageTitle, /route\.id\s*!==\s*['"]404['"]/);
  assert.match(notFound, /<h1\b/);
  assert.doesNotMatch(notFound, /<h2\b[^>]*id=['"]wiki-404-title['"]/);
  assert.equal((gettingStarted.match(/data-wiki-hash-viewer/g) ?? []).length, 6);
  assert.equal((gettingStarted.match(/role=['"]dialog['"]/g) ?? []).length, 6);
  assert.equal((gettingStarted.match(/aria-modal=['"]true['"]/g) ?? []).length, 6);
  assert.doesNotMatch(header, /const main\s*=\s*document\.querySelector/);
  assert.match(header, /const pageMain\s*=\s*document\.querySelector<HTMLElement>\(['"]main['"]\)/);
  assert.match(header, /pageMain\.inert\s*=\s*isOpen/);
  assert.doesNotMatch(sidebar, /min-h-10/);
  assert.doesNotMatch(sidebarToc, /min-h-9/);
});
