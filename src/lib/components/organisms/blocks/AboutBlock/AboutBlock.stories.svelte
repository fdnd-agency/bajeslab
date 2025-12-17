<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import AboutBlock from './AboutBlock.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		// Story title
		title: 'Organisms/Blocks/AboutBlock',

		// Gebruikte componenten
		component: AboutBlock,

		// Automatische docs
		tags: ['autodocs'],

		// Argument types
		argTypes: {
			title: {
				control: 'text',
				description: 'Titel van het about blok'
			},
			description: {
				control: 'text',
				description: 'Tekst met HTML formatting'
			},
			variant: {
				control: 'select',
				options: ['preview', 'full'],
				description: 'Preview toont eerste alinea, Full toont volledige tekst'
			},
			showButton: {
				control: 'boolean',
				description: 'Toon "Lees meer" knop'
			},
			buttonLink: {
				control: 'text',
				description: 'Link van de button'
			},
			image: {
				control: 'text',
				description: 'Afbeelding URL'
			}
		},
		parameters: {
			design: {
				type: 'figma',
				url: 'https://www.figma.com/design/doguH52moO2cyA3pT0B6sd/Living-Lab-Bajeskwartier-2025-2026?node-id=667-1423&t=3ufvBviBPr2YLWJs-1'
			},
			docs: {
				description: {
					component: ``
				}
			}
		}
	});
</script>

<!-- Preview variant - Homepage -->
<Story
	name="Preview (Homepage)"
	args={{
		title: 'Over ons',
		description:
			'<p>In de voormalige Bijlmer Bajes werken gebiedsontwikkelaar AM, de HvA en verschillende partners sinds 2018 samen in het Healthy Urban Living Lab Bajeskwartier. Het doel is een groene, gezonde en inclusieve buurt voor alle bewoners. Onderzoekers en studenten bekijken samen met bewoners en gebruikers hoe het gebied zo ingericht kan worden dat het bewegen en ontmoeten stimuleert. Dit is belangrijk voor gezondheid en welzijn...</p>',
		variant: 'preview',
		image: 'https://placehold.co/600x400',
		showButton: true,
		buttonLink: '/over-ons'
	}}
/>

<!-- Full variant - About pagina -->
<Story
	name="Full (About Pagina)"
	args={{
		title: 'Over ons',
		description:
			'<p>In de voormalige Bijlmer Bajes werken gebiedsontwikkelaar AM, de HvA en verschillende partners sinds 2018 samen in het Healthy Urban Living Lab Bajeskwartier. Het doel is een groene, gezonde en inclusieve buurt voor alle bewoners. Onderzoekers en studenten bekijken samen met bewoners en gebruikers hoe het gebied zo ingericht kan worden dat het bewegen en ontmoeten stimuleert. Dit is belangrijk voor gezondheid en welzijn.</p>\n<p>Sinds 2023 bevindt de ontwikkeling van het Bajeskwartier zich in een nieuwe fase. De eerste gebouwen zijn opgeleverd, en uiteindelijk komen er 2.500 tot 3.500 mensen te wonen, verdeeld over 1.350 appartementen (huur en koop). De sociale huurwoningen bieden plek aan een diverse groep bewoners: studenten, ouderen, statushouders en mensen die extra begeleiding nodig hebben vanwege sociale of psychische problemen.</p>',
		variant: 'full',
		image: 'https://placehold.co/600x400',
		showButton: false,
		buttonLink: '/over-ons'
	}}
/>
