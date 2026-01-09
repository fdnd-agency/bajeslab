<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Breadcrumbs from './Breadcrumbs.svelte';

	const { Story } = defineMeta({
		title: 'Molecules/Breadcrumbs',
		component: Breadcrumbs,
		tags: ['autodocs'],
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

	const mockCrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Detail', isLast: true }
	];
</script>

<Story
	name="Breadcrumbs"
	args={{
		crumbs: mockCrumbs,
		separator: '›'
	}}
/>
