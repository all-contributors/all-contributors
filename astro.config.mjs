// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://allcontributors.org',
  base: '/all-contributors/',
  output: 'static',

  redirects: {
      // Later we can put redirects here if needed
  },

  integrations: [
      starlight({
          customCss: [
              './src/styles/global.css',
              './src/fonts/font-face.css'],
          title: '',
                  logo: {
                      src: './src/assets/logo-full.svg',
                  },
          favicon: '/icons/favicon-16x16.png',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/all-contributors/all-contributors' }],
          sidebar: [
              {
                  label: 'Specification',
                  items: [
                      { label: 'overview', slug: 'overview' },
                      { label: 'specification', slug: 'specification' },
                      { label: 'emoji-key', slug: 'emoji-key' },
                      { label: 'repository-maintainers', slug: 'repository-maintainers' },
                      { label: 'tooling', slug: 'tooling' }
                  ],
              },
              {
                  label: '@all-contributors Bot 🤖',
                  items: [
                      { label: 'overview', slug: 'bot/overview' },
                      { label: 'installation', slug: 'bot/installation' },
                      { label: 'usage', slug: 'bot/usage' },
                      { label: 'configuration', slug: 'bot/configuration' },
                      { label: 'faq', slug: 'bot/faq' }
                  ],
              },
              {
                  label: 'CLI',
                  items: [
                      { label: 'overview', slug: 'cli/overview' },
                      { label: 'installation', slug: 'cli/installation' },
                      { label: 'usage', slug: 'cli/usage' },
                      { label: 'configuration', slug: 'cli/configuration' }
                  ],
              },
              {
                  label: 'Project',
                  items: [
                      { label: 'contribute', slug: 'project/contribute' },
                      { label: 'code-of-conduct', slug: 'project/code-of-conduct' },
                      { label: 'implementations', slug: 'project/implementations' }
                  ],
              },
          ],
          }), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});