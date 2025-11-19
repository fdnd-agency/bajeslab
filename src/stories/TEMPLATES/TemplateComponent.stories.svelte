<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TemplateComponent from './TemplateComponent.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		// Story title
		title: 'Templates/Component Template',

		// Gebruikte componenten
		component: TemplateComponent,

		// Automatische docs
		tags: ['autodocs'],

		// Argument types
		argTypes: {
			backgroundColor: {
				// Kies een achtergrondkleur
				control: 'color'
			},
			title: {
				// Verander de tekst
				control: 'text'
			}
		},
		parameters: {
			// Document text
			docs: {
				description: {
					component: `
**Component Template**

Dit is een herbruikbare template voor het maken van nieuwe components.

**Props:**
- className: CSS class naam
- title: Verander de tekst
- backgroundColor: Kies een achtergrondkleur
					`
				}
			}
		}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Standaard" />

<Story
	name="Met Styling"
	args={{
		className: 'styling',
		title: 'Dit is een Svelte component met styling'
	}}
/>
