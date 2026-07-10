import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://wiki.purduephotoclub.org',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: 'PPC Wiki',
      description: 'Purdue Photography Club knowledge base, updates, and operating notes.',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/wiki.css'],
      disable404Route: true,
      components: {
        Header: './src/components/WikiHeader.astro',
        Footer: './src/components/WikiFooter.astro',
        PageSidebar: './src/components/WikiPageSidebar.astro',
        PageTitle: './src/components/WikiPageTitle.astro',
        Sidebar: './src/components/WikiSidebar.astro',
        SiteTitle: './src/components/WikiSiteTitle.astro',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      sidebar: [
        {
          label: 'Homepage',
          items: ['index'],
        },
        {
          label: 'Photography',
          items: [
            'photography',
            'photography/basics',
            'photography/anatomy-of-a-camera',
            'photography/composition',
            'photography/editing',
            'photography/film',
            'photography/buying-guide-gear',
            'photography/technical',
            'photography/astrophotography',
            'photography/helpful-resources',
          ],
        },
      ],
    }),
  ],
});
