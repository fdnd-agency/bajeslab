<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ThemalijnenBlock from './ThemalijnenBlock.svelte';

	const { Story } = defineMeta({
		title: 'Organisms/Blocks/ThemalijnenBlock',
		component: ThemalijnenBlock,
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
			illustration: '33972bc5-9f0b-47c8-9aed-77b1b33bca8d'
		},
		{
			id: 2,
			intro:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			titel: '(Semi-) openbare (groene) ruimten: gebruik en collectieve beheervormen',
			illustration: '33972bc5-9f0b-47c8-9aed-77b1b33bca8d'
		},
		{
			id: 3,
			intro:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			titel: 'Rol van sport en bewegen voor de buurt',
			illustration: '33972bc5-9f0b-47c8-9aed-77b1b33bca8d'
		}
	];
</script>

<Story
	name="Standaard"
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
	name="With intro"
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
