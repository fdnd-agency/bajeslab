<script>
	import ThemalijnenBlock from '$lib/components/organisms/blocks/ThemelinesBlock/ThemelinesBlock.svelte';

	export let data; // komt van +page.server.js
	const { themes } = data;
</script>

<ThemalijnenBlock
	{themes}
	title="Themalijnen"
	layout="column"
	showIntro
	buttonText="Lees meer"
	buttonPosition="flex-end"
	buttonLink="/over-ons#theme-line"
/>
