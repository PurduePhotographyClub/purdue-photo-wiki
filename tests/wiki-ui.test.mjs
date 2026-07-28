import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');

function readProjectFile(relativePath) {
  return readFileSync(join(projectRoot, relativePath), 'utf8');
}

function sourceFiles(directory, extensions) {
  return readdirSync(join(projectRoot, directory), { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && extensions.some((extension) => entry.name.endsWith(extension)))
    .map((entry) => join(entry.parentPath, entry.name));
}

test('Jobs 101 preserves the approved copy in the standard wiki layout', () => {
  const jobs101 = readProjectFile('src/content/docs/jobs/index.mdx');
  const config = readProjectFile('astro.config.mjs');
  const markdown = readProjectFile('src/components/WikiMarkdownContent.astro');
  const tailwind = readProjectFile('src/styles/tailwind.css');
  const bodyCopy = jobs101
    .replace(/^---[\s\S]*?---\s*/, '')
    .replace(/<nav\b[^>]*data-jobs-category-nav[^>]*>[\s\S]*?<\/nav>/, '')
    .replace(/^##\s+.+$/gm, '')
    .replace(/<\/?div\b[^>]*>/g, '')
    .replace(/<\/?strong\b[^>]*>/g, '')
    .replace(/^\s*(?:\d+\.|-)\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();

  assert.equal(
    createHash('sha256').update(bodyCopy).digest('hex'),
    'e7ba91239f02bf8ad1e19fe2124e4233714b4830185cbf97cf373d6b0ab49eec',
  );
  assert.match(jobs101, /^title: Jobs 101$/m);
  assert.match(jobs101, /^accent: silver$/m);
  assert.match(
    jobs101,
    /^description: Welcome to Jobs 101\. This guide is based on problems members faced in past years\. It will help you avoid misunderstandings, protect yourself while working with clients, and get started more smoothly, especially if this is your first job\. We hope it helps\.$/m,
  );
  for (const heading of ['General tips', 'Communication', 'Covering events', 'Contracts and late arrivals']) {
    assert.match(jobs101, new RegExp(`^## ${heading}$`, 'm'));
  }
  assert.doesNotMatch(jobs101, /📸|✅|💬|📅|📄/);
  assert.ok((jobs101.match(/<strong\b/g) ?? []).length >= 8);
  assert.ok((jobs101.match(/^ {4}-\s/gm) ?? []).length >= 20);
  assert.match(jobs101, /^1\.\s/m);
  assert.match(jobs101, /^-\s/m);
  for (const [label, summary, color, anchor] of [
    ['General tips', 'Agree on delivery, payment, and image use.', 'amber', 'general-tips'],
    ['Communication', 'Keep the client updated before, during, and after the job.', 'sky', 'communication'],
    ['Covering events', 'Prepare for the schedule, venue, and people.', 'emerald', 'covering-events'],
    ['Contracts and late arrivals', 'Protect your time with written terms and clear policies.', 'rose', 'contracts-and-late-arrivals'],
  ]) {
    assert.match(jobs101, new RegExp(`href="#${anchor}"`));
    assert.match(jobs101, new RegExp(`text-${color}-200[^>]*>0[1-4]<`));
    assert.match(jobs101, new RegExp(`>${label}<`));
    assert.match(jobs101, new RegExp(`>${summary.replaceAll('.', '\\.')}<`));
  }
  const categoryColors = [
    ['General tips', 'Communication', 'amber'],
    ['Communication', 'Covering events', 'sky'],
    ['Covering events', 'Contracts and late arrivals', 'emerald'],
    ['Contracts and late arrivals', null, 'rose'],
  ];
  for (const [heading, nextHeading, color] of categoryColors) {
    const categoryStart = jobs101.indexOf(`## ${heading}`);
    const categoryEnd = nextHeading ? jobs101.indexOf(`## ${nextHeading}`) : jobs101.length;
    const category = jobs101.slice(categoryStart, categoryEnd);

    assert.match(category, new RegExp(`--wiki-accent:var\\(--color-${color}-200\\)`));
    assert.match(category, new RegExp(`text-${color}-200`));
    assert.doesNotMatch(category, new RegExp(`text-(?!${color})[a-z]+-200`));
  }
  assert.match(markdown, /\[&>\.sl-heading-wrapper\.level-h2:first-child\]:border-0!/);
  assert.match(markdown, /\[&>\.sl-heading-wrapper\.level-h2:first-child\]:mt-8!/);
  assert.match(markdown, /\[&>\.sl-heading-wrapper\.level-h2:first-child\]:pt-0!/);
  assert.match(markdown, /\[&>\[data-wiki-category-nav\]\+\.sl-heading-wrapper\.level-h2\]:mt-8!/);
  assert.match(markdown, /\[&>\[data-wiki-category-nav\]\+\.sl-heading-wrapper\.level-h2\]:border-0!/);
  assert.match(markdown, /\[&>\[data-wiki-category-nav\]\+\.sl-heading-wrapper\.level-h2\]:pt-0!/);
  assert.match(tailwind, /\.wiki-prose\[data-wiki-accent=['"]silver['"]\]\s*\{\s*--wiki-accent:\s*var\(--color-neutral-300\)/);
  assert.match(config, /label: 'Jobs'/);
  assert.match(config, /items: \['jobs'\]/);
});

test('the homepage offers two clear paths without a decorative hero image', () => {
  const homepage = readProjectFile('src/content/docs/index.md');
  const sidebar = readProjectFile('src/components/WikiSidebar.astro');

  assert.match(homepage, /Choose a guide/);
  assert.match(homepage, /href="\/photography\/"/);
  assert.match(homepage, /href="\/system\/"/);
  assert.match(homepage, /Photography topics/);
  assert.match(homepage, /See how the club's online tools work/);
  assert.match(homepage, /text-amber-200[^>]*>light and framing<\/strong>/);
  assert.match(homepage, /text-sky-200[^>]*>website, API, and Discord<\/strong>/);
  assert.match(homepage, /tag: title\s+content: PPC Wiki/);
  assert.doesNotMatch(homepage, /images\/site\/hero\/hero\.webp/);
  assert.doesNotMatch(homepage, /Learn photography or see how the club's online tools work\./);
  assert.doesNotMatch(sidebar, /Learn photography or how the club's online tools work\./);
  assert.doesNotMatch(homepage, /everything in between|complete beginner|feel free to explore/i);
  assert.doesNotMatch(homepage, /<\/a>\n\s*\n\s*<a/, 'blank lines between HTML cards render later cards as source text');
});

test('the wiki keeps shared theme tokens in its Tailwind entry with no component style blocks', () => {
  assert.equal(existsSync(join(projectRoot, 'src/styles/wiki.css')), false);

  const tailwindEntry = readProjectFile('src/styles/tailwind.css');
  assert.match(tailwindEntry, /@import ['"]tailwindcss['"]/);
  assert.doesNotMatch(tailwindEntry, /@layer\s+(?:base|components)/);
  assert.match(tailwindEntry, /--font-sans:/);
  assert.match(tailwindEntry, /html\[data-theme=['"]light['"]\]/);
  assert.match(tailwindEntry, /--color-neutral-950:/);
  assert.match(tailwindEntry, /html\[data-theme=['"]dark['"]\] \.wiki-brand-logo[\s\S]+filter:\s*none/);
  assert.match(tailwindEntry, /html\[data-theme=['"]light['"]\] \.wiki-brand-logo[\s\S]+filter:\s*invert\(1\)/);
  assert.match(tailwindEntry, /\.wiki-prose\[data-wiki-accent=['"]purple['"]\]/);
  assert.match(tailwindEntry, /\.wiki-prose strong:not\(\[class\]\)/);
  assert.match(tailwindEntry, /\.wiki-prose mark/);

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
  assert.match(pageFrame, /lg:px-0/);
  assert.match(header, /lg:grid-cols-\[17rem_minmax\(0,1fr\)\]/);
  assert.match(header, /lg:max-w-lg/);
  assert.match(header, /xl:max-w-2xl/);
  assert.match(header, /items-center justify-end[^"\n]+lg:justify-start/);
  assert.match(header, /lg:ml-auto!/);
  assert.match(header, /aria-controls="starlight__sidebar"/);
  assert.match(header, /min-h-11/);
  assert.match(header, /data-wiki-theme-toggle/);
  assert.match(header, /data-theme-icon="sun"/);
  assert.match(header, /data-theme-icon="moon"/);
  assert.match(header, /Use light theme/);
  assert.match(header, /Use dark theme/);
  assert.match(header, /localStorage\.setItem\(['"]starlight-theme['"]/);
  assert.match(header, /data-wiki-theme-toggle[\s\S]+rounded-full[\s\S]+border-transparent/);
  assert.ok(
    header.indexOf('aria-label="Club links"') < header.indexOf('data-wiki-theme-toggle'),
    'the theme button should sit with the other right-side header controls',
  );
  assert.doesNotMatch(header, /ThemeSelect|<select\b/);
  assert.match(themeProvider, /localStorage\.getItem\(['"]starlight-theme['"]\)/);
  assert.match(themeProvider, /try\s*\{[\s\S]+localStorage\.getItem[\s\S]+catch\s*\{/);
  assert.match(themeProvider, /prefers-color-scheme:\s*light/);
  assert.doesNotMatch(themeProvider, /dataset\.theme\s*=\s*['"]dark['"]/);
});

test('article rails, headings, and page controls keep a centered readable rhythm', () => {
  const contentPanel = readProjectFile('src/components/WikiContentPanel.astro');
  const twoColumnContent = readProjectFile('src/components/WikiTwoColumnContent.astro');
  const pageTitle = readProjectFile('src/components/WikiPageTitle.astro');
  const markdown = readProjectFile('src/components/WikiMarkdownContent.astro');
  const footer = readProjectFile('src/components/WikiFooter.astro');
  const homepage = readProjectFile('src/content/docs/index.md');
  const gettingStarted = readProjectFile('src/content/docs/photography/index.md');

  assert.match(contentPanel, /@container[^\n]+mx-auto![^\n]+max-w-6xl/);
  assert.match(twoColumnContent, /sm:\[&>main\]:px-7!/);
  assert.match(twoColumnContent, /lg:\[&>main\]:px-10!/);
  assert.match(twoColumnContent, /xl:\[&>main\]:px-12!/);
  assert.match(pageTitle, /max-w-6xl/);
  assert.match(pageTitle, /border-b/);
  assert.match(pageTitle, /h-px w-10/);
  assert.match(pageTitle, /!isHomepage && description/);
  assert.match(pageTitle, /mt-4 max-w-\[62ch\]/);
  assert.doesNotMatch(pageTitle, /\bpx-4\b|\bsm:px-7\b|\blg:px-10\b|\bxl:px-12\b/);
  assert.doesNotMatch(pageTitle, /lg:grid-cols-\[minmax\(0,1fr\)/);
  assert.doesNotMatch(pageTitle, /border-l-2|absolute top-0|-left-0\.5/);
  assert.doesNotMatch(pageTitle, /bg-gradient-to-r|border-y/);
  assert.match(markdown, /sl-markdown-content/);
  assert.match(markdown, /wiki-prose/);
  assert.match(markdown, /data-wiki-accent=\{accent\}/);
  assert.match(markdown, /\btext-base\b/);
  assert.match(markdown, /sm:text-\[1\.0625rem\]/);
  assert.match(markdown, /sm:leading-8/);
  assert.match(markdown, /\[&_\.sl-heading-wrapper\.level-h2\]:mt-14!/);
  assert.match(markdown, /\[&_\.sl-heading-wrapper\.level-h2\]:pt-8!/);
  assert.match(markdown, /\[&_\.sl-heading-wrapper\.level-h3\]:mt-10!/);
  assert.match(markdown, /\[&_\.sl-anchor-link\]:no-underline!/);
  assert.match(markdown, /\[&>\*\+\*\]:mt-6!/);
  assert.match(markdown, /\[&_p\+p\]:mt-5!/);
  assert.match(markdown, /\[&_ol\]:my-6/);
  assert.match(markdown, /\[&_ol\]:list-decimal/);
  assert.match(markdown, /\[&_ol\]:space-y-3/);
  assert.match(markdown, /\[&_ul\]:list-disc/);
  assert.match(markdown, /\[&_strong\]:font-bold/);
  assert.doesNotMatch(markdown, /\[&_strong\]:text-neutral-100/);
  assert.doesNotMatch(markdown, /\bspace-y-6\b/);
  assert.match(homepage, /@3xl:grid-cols-2/);
  assert.match(homepage, /@5xl:grid-cols-3/);
  assert.match(homepage, /grid gap-3/);
  assert.doesNotMatch(homepage, /aspect-square/);
  assert.match(gettingStarted, /flex flex-col gap-12 sm:gap-16/);
  assert.match(gettingStarted, /border-l-2[^\n]+px-5[^\n]+sm:px-8/);
  assert.match(gettingStarted, /mx-auto! w-full max-w-6xl min-w-0/);
  assert.match(gettingStarted, /mb-8![^\n]+sm:mb-10!/);
  assert.match(gettingStarted, /gap-5[^\n]+py-6[^\n]+sm:gap-7[^\n]+sm:py-7/);
  assert.doesNotMatch(gettingStarted, /hidden min-h-80/);
  assert.match(footer, /\bw-screen\b/);
  assert.match(footer, /lg:ml-\[calc\(-50vw-8\.5rem\)\]!/);
  assert.match(footer, /lg:pl-\[17rem\]/);
  assert.match(footer, /mx-auto! w-full max-w-6xl/);
  assert.match(footer, /py-10[^\n]+sm:py-12/);
});

test('custom photography pages use a compact section rhythm', () => {
  const compactPages = [
    'src/content/docs/photography/index.md',
    'src/content/docs/photography/anatomy-of-a-camera.md',
    'src/content/docs/photography/basics.md',
    'src/content/docs/photography/buying-guide-gear.md',
    'src/content/docs/photography/editing.md',
    'src/content/docs/photography/helpful-resources.md',
  ];

  for (const relativePath of compactPages) {
    const page = readProjectFile(relativePath);
    assert.doesNotMatch(page, /\bspace-y-16\b|\bsm:space-y-20\b/, `${relativePath} keeps oversized page gaps`);
  }

  for (const relativePath of [
    'src/content/docs/photography/anatomy-of-a-camera.md',
    'src/content/docs/photography/basics.md',
  ]) {
    const page = readProjectFile(relativePath);
    assert.doesNotMatch(page, /\blg:items-end\b/, `${relativePath} bottom-aligns a portrait hero`);
  }

  const basics = readProjectFile('src/content/docs/photography/basics.md');
  assert.match(basics, /basics-hero__image[^"\n]*overflow-hidden/);
  assert.match(basics, /aspect-\[4\/3\][^"\n]*object-cover/);
});

test('the editing color lesson groups controls by purpose and keeps previews centered', () => {
  const editing = readProjectFile('src/content/docs/photography/editing.md');
  const colorSection = editing.indexOf('id="color"');
  const basicControls = editing.indexOf('id="color-basics"');
  const advancedControls = editing.indexOf('id="color-tools"');
  const softwareSection = editing.indexOf('id="software"');

  assert.ok(colorSection >= 0, 'the color section is missing');
  assert.ok(colorSection < basicControls, 'basic color controls should follow the color introduction');
  assert.ok(basicControls < advancedControls, 'advanced color tools should follow the basic controls');
  assert.ok(advancedControls < softwareSection, 'color tools should stay inside the color lesson');
  assert.match(editing, /<section[^>]+id="color-basics">/);
  assert.match(editing, /mx-auto! w-full max-w-5xl/);
  assert.match(editing, /max-h-\[34rem\][^"\n]*object-contain[^"\n]*object-top/);
  assert.doesNotMatch(
    editing,
    /id="color"[^>]+lg:grid-cols-\[minmax\(0,0\.9fr\)_minmax\(20rem,1\.1fr\)\]/,
  );
});

test('helpful resources is a compact, purpose-led directory', () => {
  const resources = readProjectFile('src/content/docs/photography/helpful-resources.md');

  assert.match(resources, /Pick the source that matches your question/);
  assert.match(resources, /aria-label="How to use these resources"/);
  assert.match(resources, /sm:grid-cols-2[^"\n]*xl:grid-cols-4/);
  assert.equal((resources.match(/data-resource-card/g) ?? []).length, 16);
  assert.doesNotMatch(resources, /\baspect-square\b/);
  assert.doesNotMatch(resources, />Open<\/a>/);
});

test('the wiki footer mirrors the club website footer', () => {
  const footer = readProjectFile('src/components/WikiFooter.astro');

  assert.match(footer, /max-w-6xl/);
  assert.match(footer, /Film, digital, darkroom, and club work at Purdue since 1934\./);
  assert.match(footer, />Club links</);
  for (const label of ['Gallery', 'Members', 'Competitions', 'Facilities', 'Membership', 'Events', 'Request']) {
    assert.match(footer, new RegExp(label));
  }
  for (const label of ['Instagram', 'Discord', 'Email', 'Linktree', 'BoilerLink', 'GitHub']) {
    assert.match(footer, new RegExp(label));
  }
  assert.match(footer, /https:\/\/github\.com\/PurduePhotographyClub/);
  assert.match(
    footer,
    /href: 'https:\/\/github\.com\/PurduePhotographyClub', label: 'GitHub', icon: 'github', external: true/,
  );
  assert.match(footer, /link\.icon === 'github'/);
  assert.match(footer, /target=\{link\.external \? '_blank' : undefined\}/);
  assert.match(footer, /rel=\{link\.external \? 'noopener noreferrer' : undefined\}/);
  assert.match(footer, /\bpb-12\b/);
  assert.match(footer, /instagram\.com\/alesgs\.photos/);
  assert.match(footer, /Made with love by/);
  assert.match(footer, /class="wiki-brand-logo size-10 object-contain/);
  assert.doesNotMatch(footer, /newsletter|LISTSERV|data-wiki-newsletter/i);
  assert.doesNotMatch(footer, /text-\[0\.62rem\][^"\n]*text-neutral-500/);
});

test('the homepage has a compact, page-specific introduction', () => {
  const pageTitle = readProjectFile('src/components/WikiPageTitle.astro');
  const homepage = readProjectFile('src/content/docs/index.md');

  assert.match(pageTitle, /const isHomepage = Astro\.url\.pathname === ['"]\/['"]/);
  assert.match(pageTitle, /Photography and club guides/);
  assert.match(pageTitle, /isHomepage \?/);
  assert.match(pageTitle, /max-w-6xl/);
  assert.doesNotMatch(pageTitle, /\bpx-4\b|\bsm:px-7\b|\blg:px-10\b|\bxl:px-12\b/);
  assert.match(homepage, /title: Photography and club guides/);
});

test('system pages use larger type and calmer card layouts', () => {
  const diagram = readProjectFile('src/components/SystemDiagram.astro');
  const technologies = readProjectFile('src/components/TechnologyGrid.astro');
  const systemPages = sourceFiles('src/content/docs/system', ['.mdx'])
    .map((path) => readFileSync(path, 'utf8'))
    .join('\n');

  assert.match(diagram, /text-sm leading-6 text-current/);
  assert.match(diagram, /text-sm leading-6 text-neutral-400/);
  assert.match(diagram, /space-y-4/);
  assert.doesNotMatch(diagram, /space-y-px/);
  assert.doesNotMatch(diagram, /↓|↙|→|endsCompactRow/);
  assert.doesNotMatch(diagram, /isSequence && index < lane\.nodes\.length - 1/);
  assert.match(technologies, /grid gap-4/);
  assert.match(technologies, /text-sm leading-6 text-neutral-400/);
  assert.doesNotMatch(systemPages, /grid gap-px border border-white\/10 bg-white\/10/);
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

  assert.match(config, /label: 'Club system'/);
  assert.match(diagrams, /<figure aria-labelledby=/);
  assert.doesNotMatch(diagrams, /<figure role="img"/);
  assert.match(diagrams, /aria-describedby=/);
  assert.match(diagrams, /data-no-expand/);
  assert.match(diagrams, /layout\?: 'standard' \| 'compact-flow'/);
  assert.match(diagrams, /kind\?: 'sequence' \| 'parallel' \| 'collection'/);
  assert.match(diagrams, /kind: 'parallel'/);
  assert.match(diagrams, /kind: 'collection'/);
  assert.ok((diagrams.match(/layout: 'compact-flow'/g) ?? []).length >= 5);
  assert.match(diagrams, /@container/);
  assert.match(diagrams, /@5xl:flex-row/);
  assert.match(diagrams, /@3xl:grid-cols-2/);
  assert.match(diagrams, /@5xl:grid-cols-3/);
  assert.match(diagrams, /const ListTag = isSequence \? 'ol' : 'ul'/);
  assert.match(diagrams, /isSequence \? String\(index \+ 1\)\.padStart\(2, '0'\) : '•'/);
  assert.match(diagrams, /role="list"/);
  assert.match(diagrams, /label: 'Darkroom schedule'[^\n]+detail: 'Applies scheduled darkroom changes'/);
  assert.match(diagrams, /label: 'Darkroom stats'[^\n]+detail: 'Updates the current totals'/);
  assert.match(technologies, /\/images\/tech\//);
});

test('the scheduler guide documents every configured job', () => {
  const expectedPaths = [
    '/internal/jobs/memberships/expire',
    '/internal/jobs/memberships/roles/reconcile',
    '/internal/jobs/darkroom/schedule/sweep',
    '/internal/jobs/studio/schedule/sweep',
    '/internal/jobs/darkroom/stats/sync',
    '/internal/jobs/equipment/reminders/run',
    '/internal/jobs/photographer-requests/expire',
  ];
  const automation = readProjectFile('src/content/docs/system/automation.mdx');
  const diagrams = readProjectFile('src/components/SystemDiagram.astro');
  const schedulerSourcePath = join(projectRoot, '..', 'scheduler-worker', 'src', 'index.ts');

  assert.match(automation, /seven API jobs/i);
  assert.match(diagrams, /label: 'Seven jobs'/);
  assert.match(diagrams, /label: 'Membership roles'/);

  for (const path of expectedPaths) {
    assert.match(automation, new RegExp(path.replaceAll('/', '\\/')));
  }

  if (existsSync(schedulerSourcePath)) {
    const schedulerSource = readFileSync(schedulerSourcePath, 'utf8');
    for (const path of expectedPaths) {
      assert.match(schedulerSource, new RegExp(path.replaceAll('/', '\\/')));
    }
    assert.equal((schedulerSource.match(/"\/internal\/jobs\//g) ?? []).length, expectedPaths.length);
  }
});

test('the system guide uses direct, plain language', () => {
  const systemCopy = sourceFiles('src/content/docs/system', ['.mdx'])
    .map((path) => readFileSync(path, 'utf8'))
    .join('\n');

  assert.doesNotMatch(
    systemCopy,
    /center of gravity|That is why|This is also why|The hardest case|deliberately ordered|at the exact moment you read it|code in this branch/i,
  );
  assert.match(systemCopy, /The API is the only service that changes club records/);
  assert.match(systemCopy, /If club data changes, the request goes through the API/);
  assert.doesNotMatch(
    systemCopy,
    /Queues or Durable Objects could be added later\. This guide only describes the current repository\./,
  );
});

test('every system page uses selective accent-colored emphasis', () => {
  const tailwindEntry = readProjectFile('src/styles/tailwind.css');

  assert.match(tailwindEntry, /\.wiki-prose strong:not\(\[class\]\)\s*\{[\s\S]*color:\s*var\(--wiki-accent\)/);

  for (const path of sourceFiles('src/content/docs/system', ['.mdx'])) {
    const source = readFileSync(path, 'utf8');
    const emphasizedPhrases = source.match(/\*\*[^*\n]+\*\*/g) ?? [];
    const relativePath = path.slice(projectRoot.length + 1);

    assert.ok(emphasizedPhrases.length >= 2, `${relativePath} needs at least two useful emphasized phrases`);
  }
});

test('getting started keeps photo credits attached to the photos they describe', () => {
  const gettingStarted = readProjectFile('src/content/docs/photography/index.md');

  assert.match(gettingStarted, /Featured photo by[\s\S]+@Linzzi Ji/);
  assert.match(gettingStarted, /Three photos by[\s\S]+@Dylan Chu/);
  assert.doesNotMatch(gettingStarted, /Photos by[\s\S]+@Dylan Chu[\s\S]+and[\s\S]+@Linzzi Ji/);
});

test('reader-facing copy stays simple and direct', () => {
  const copyPaths = [
    ...sourceFiles('src/content/docs', ['.md', '.mdx']),
    ...[
      'src/components/SystemDiagram.astro',
      'src/components/TechnologyGrid.astro',
      'src/components/WikiFooter.astro',
      'src/components/WikiHeader.astro',
      'src/components/WikiPageTitle.astro',
      'src/components/WikiSidebar.astro',
      'astro.config.mjs',
    ].map((path) => join(projectRoot, path)),
  ];
  const readerCopy = copyPaths.map((path) => readFileSync(path, 'utf8')).join('\n');

  assert.doesNotMatch(
    readerCopy,
    /operational chain|conflating|public reads are enumerated|domain predicates|response-loss window|compensation paths?|logical idempotency identity|establish the trusted caller context/i,
  );
  assert.doesNotMatch(
    readerCopy,
    /\b(additionally|delve|intricate|pivotal|robust|showcase|tapestry|testament|underscore)\b/i,
  );

  const longSentences = copyPaths.flatMap((path) => {
    const relativePath = path.slice(projectRoot.length + 1);
    if (relativePath === 'src/content/docs/jobs/index.mdx') {
      return [];
    }

    return readFileSync(path, 'utf8')
      .split('\n')
      .flatMap((line, index) => {
        const prose = line.trim();
        if (
          !prose ||
          prose.startsWith('#') ||
          prose.startsWith('-') ||
          prose.startsWith('<') ||
          prose.startsWith('|') ||
          prose.startsWith('import ') ||
          prose.includes('class=') ||
          prose.includes('className=')
        ) {
          return [];
        }

        return prose
          .split(/(?<=[.!?])\s+/)
          .filter((sentence) => (sentence.match(/\b[\w’'-]+\b/g) ?? []).length > 34)
          .map((sentence) => `${relativePath}:${index + 1}: ${sentence}`);
      });
  });

  assert.deepEqual(longSentences, []);
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
  assert.match(imageViewer, /\btop-1\/2\b/);
  assert.match(imageViewer, /\bleft-1\/2\b/);
  assert.match(imageViewer, /-translate-x-1\/2/);
  assert.match(imageViewer, /-translate-y-1\/2/);
  assert.doesNotMatch(imageViewer, /\binset-0\b[^"\n]*\bm-auto\b/);
  assert.match(imageViewer, /classList\.remove\(['"]target:flex['"]\)/);
  assert.match(imageViewer, /classList\.add\(['"]target:flex['"]\)/);
  assert.doesNotMatch(imageViewer, /location\.hash\s*=/);
  assert.doesNotMatch(imageViewer, /previousTrigger\?\.focus\(\{\s*preventScroll/);
  assert.match(pageTitle, /route\.id\s*!==\s*['"]404['"]/);
  assert.match(notFound, /href: https:\/\/wiki\.purduephotoclub\.org\/404\.html/);
  assert.match(notFound, /name: robots[\s\S]+content: noindex/);
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
