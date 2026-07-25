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
      description: "Learn photography and see how the club's online tools work.",
      favicon: '/favicon.svg',
      customCss: ['./src/styles/tailwind.css'],
      components: {
        ContentPanel: './src/components/WikiContentPanel.astro',
        Head: './src/components/WikiHead.astro',
        Header: './src/components/WikiHeader.astro',
        Footer: './src/components/WikiFooter.astro',
        MarkdownContent: './src/components/WikiMarkdownContent.astro',
        PageFrame: './src/components/WikiPageFrame.astro',
        PageSidebar: './src/components/WikiPageSidebar.astro',
        PageTitle: './src/components/WikiPageTitle.astro',
        Pagination: './src/components/WikiPagination.astro',
        Sidebar: './src/components/WikiSidebar.astro',
        SiteTitle: './src/components/WikiSiteTitle.astro',
        SkipLink: './src/components/WikiSkipLink.astro',
        ThemeProvider: './src/components/WikiThemeProvider.astro',
        TwoColumnContent: './src/components/WikiTwoColumnContent.astro',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      sidebar: [
        {
          label: 'Home',
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
        {
          label: 'Club system',
          items: [
            'system',
            'system/requests-and-auth',
            'system/data-and-media',
            'system/discord',
            'system/email-and-membership',
            'system/automation',
            'system/deployment-and-safety',
          ],
        },
      ],
    }),
  ],
});
