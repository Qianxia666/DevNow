import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig, squooshImageService } from 'astro/config';
import rehypePluginImageNativeLazyLoading from 'rehype-plugin-image-native-lazy-loading';
import { remarkReadingTime } from './src/utils/all';

// https://astro.build/config
export default defineConfig({
  site: 'https://devnow.com',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [rehypePluginImageNativeLazyLoading],
    extendDefaultPlugins: true
  },
  image: {
    service: squooshImageService()
  },
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    mdx(),
    sitemap(),
    react()
  ]
  // output: 'server'
  // adapter: vercel()
});
