<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import NewsletterForm from './NewsletterForm.svelte';

	const { Story } = defineMeta({
		title: 'Molecules/NewsletterForm',
		component: NewsletterForm,
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
</script>

<Story
	name="Default"
	parameters={{
		// Dit probeert $page te mocken
		sveltekit_experimental: {
			stores: {
				page: {
					form: null
				}
			}
		}
	}}
/>

<Story
	name="Succes Feedback"
	parameters={{
		// Dit probeert $page te mocken
		sveltekit_experimental: {
			stores: {
				page: {
					form: {
						success: true,
						message: 'Bedankt voor je inschrijving!'
					}
				}
			}
		}
	}}
/>
