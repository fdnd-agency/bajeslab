import adapter from '@sveltejs/adapter-netlify';
import cssRune from 'svelte-css-rune';

const config = { kit: { adapter: adapter() }, preprocess: cssRune(), };

export default config;
