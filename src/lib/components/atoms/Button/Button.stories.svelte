<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from '../Button/Button.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		// Story title
		title: 'Atoms/Button',

		// Gebruikte componenten
		component: Button,

		// Automatische docs
		tags: ['autodocs'],

		// Argument types
		argTypes: {
			text: {
				// Verander de tekst
				control: 'text'
			},
			href: {
				// Verander de tekst
				control: 'text'
			},
			position: {
				options: ['flex-start', 'center', 'flex-end'],
				control: { type: 'radio' }
			}
		},
		parameters: {
			design: {
				type: 'figma',
				url: 'https://www.figma.com/design/doguH52moO2cyA3pT0B6sd/Living-Lab-Bajeskwartier-2025-2026?node-id=667-1423&t=3ufvBviBPr2YLWJs-1'
			},
			// Document text
			docs: {
				description: {
					component: `
                    `
				}
			}
		}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
	name="Primary"
	args={{
		text: 'Lees meer',
		href: '/over-ons',
		position: 'flex-end'
	}}
/>

<Story
	name="Secondary"
	args={{
		text: 'Lees meer',
		href: '/over-ons',
		position: 'flex-end'
	}}
/>
