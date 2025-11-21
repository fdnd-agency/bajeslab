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
			}
		},
		parameters: {
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
	name="Standaard"
/>
