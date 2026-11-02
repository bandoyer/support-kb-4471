// The export ships src/ only. This is the smallest config that renders its pages.
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'node:url';

const runbook = fileURLToPath(new URL('./src/lib/layouts/runbook.svelte', import.meta.url));

export default {
  extensions: ['.svelte', '.svx'],
  preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx'], layout: { runbook }, smartypants: false })],
  kit: {
    adapter: adapter({ pages: 'build', assets: 'build', strict: true }),
    alias: { '#lib': 'src/lib' },
    inlineStyleThreshold: 1000000,
    prerender: { handleHttpError: 'warn', handleMissingId: 'warn', entries: ['/kb', '/kb/incidents/4471', '/kb/incidents/4471/causes', '/kb/triage/dedupe', '/kb/decisions/0001-dedupe-by-subject'] },
  },
};
