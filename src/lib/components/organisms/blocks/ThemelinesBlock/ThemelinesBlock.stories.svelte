<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ThemelinesBlock from './ThemelinesBlock.svelte';

	const { Story } = defineMeta({
		title: 'Organisms/Blocks/ThemelinesBlock',
		component: ThemelinesBlock,
		tags: ['autodocs'],
		argTypes: {
			title: {
				control: 'text'
			},
			layout: {
				options: ['column', 'row'],
				control: { type: 'radio' }
			},
			showIntro: {
				options: [false, true],
				control: { type: 'radio' }
			},
			buttonPosition: {
				options: ['flex-start', 'center', 'flex-end'],
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

	const mockThemesData = [
		{
			id: 1,
			intro:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			titel: 'Community building / gemeenschapsontwikkeling',
			illustration: 'bb0f8b90-5870-48f8-bcda-78b5ad79933d'
		},
		{
			id: 2,
			intro:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			titel: '(Semi-) openbare (groene) ruimten: gebruik en collectieve beheervormen',
			illustration: '8776ea22-e161-4d71-83b4-c15db052005c'
		},
		{
			id: 3,
			intro:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			titel: 'Rol van sport en bewegen voor de buurt',
			illustration: 'f0b99a26-fd6f-40ec-a507-fe7522fba6fc'
		}
	];
</script>

<Story
	name="Horizontal Layout"
	args={{
		themes: mockThemesData,
		title: 'Themalijnen',
		layout: 'row',
		showIntro: false,
		buttonText: 'Lees meer',
		buttonPosition: 'flex-end',
		buttonLink: '/over-ons#theme-line'
	}}
/>

<Story
	name="Vertical Layout"
	args={{
		themes: mockThemesData,
		title: 'Themalijnen',
		layout: 'column',
		showIntro: true,
		buttonText: 'Lees meer',
		buttonPosition: 'flex-end',
		buttonLink: '/over-ons#theme-line'
	}}
/>
