<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import NewsletterBlock from './NewsletterBlock.svelte';

	const { Story } = defineMeta({
		title: 'Organisms/Blocks/NewsletterBlock',
		component: NewsletterBlock,
		tags: ['autodocs'],
		argTypes: {
			title: {
				control: 'text'
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

<Story
	name="NewsletterBlock"
	args={{
		title: 'Benieuwd naar nog meer projecten?',
		description: 'Ontvang onze nieuwsbrief en mis geen enkel update.'
	}}
/>

<Story
	name="With Loading"
	args={{
		title: 'Benieuwd naar nog meer projecten?',
		description: 'Ontvang onze nieuwsbrief en mis geen enkel update.',
		loading: true
	}}
	parameters={{
		sveltekit_experimental: {
			stores: {
				page: {
					form: {
						success: false
					}
				}
			}
		}
	}}
/>

<Story
	name="With Success Message"
	args={{
		title: 'Benieuwd naar nog meer projecten?',
		description: 'Ontvang onze nieuwsbrief en mis geen enkel update.',
		showFeedback: true
	}}
	parameters={{
		sveltekit_experimental: {
			stores: {
				page: {
					form: {
						success: true,
						message: 'Je bent succesvol ingeschreven!'
					}
				}
			}
		}
	}}
/>

<Story
	name="With Failed Message"
	args={{
		title: 'Benieuwd naar nog meer projecten?',
		description: 'Ontvang onze nieuwsbrief en mis geen enkel update.',
		showFeedback: true
	}}
	parameters={{
		sveltekit_experimental: {
			stores: {
				page: {
					form: {
						success: true,
						message: 'Mislukt!, Probeer het later nog is.'
					}
				}
			}
		}
	}}
/>
