<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ThemeCard from './ThemeCard.svelte';

	const { Story } = defineMeta({
		title: 'Molecules/ThemeCard',
		component: ThemeCard,
		tags: ['autodocs'],
		argTypes: {
			layout: {
				options: ['column', 'row'],
				control: { type: 'radio' }
			},
			showIntro: {
				options: [false, true],
				control: { type: 'radio' }
			}
		},
		parameters: {
			design: {
				type: 'figma',
				url: 'https://www.figma.com/design/doguH52moO2cyA3pT0B6sd/Living-Lab-Bajeskwartier-2025-2026?node-id=3-120&t=IeBjcBYWen78cWmX-1'
			},
			docs: {
				description: {
					component: `

					`
				}
			}
		}
	});

	const mockTheme = {
		id: 1,
		intro:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		titel: 'Community building / gemeenschapsontwikkeling',
		illustration: 'bb0f8b90-5870-48f8-bcda-78b5ad79933d'
	};
</script>

<Story
	name="ThemeCard"
	args={{
		theme: mockTheme,
		showIntro: true,
		layout: 'column'
	}}
/>
