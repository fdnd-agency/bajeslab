<script>
	import ThemelinesBlock from '$lib/components/organisms/blocks/ThemelinesBlock/ThemelinesBlock.svelte';

	export let data; // komt van +page.server.js
	const { themes } = data;
</script>


<ThemelinesBlock
	{themes}
	title="Themalijnen"
	layout="column"
	showIntro
	showButton={false}
	buttonText="Lees meer"
	buttonPosition="flex-end"
	buttonLink="/over-ons#theme-line"
/>
