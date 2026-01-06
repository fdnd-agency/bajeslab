<script>
	import HeroBlock from '$lib/components/organisms/blocks/HeroBlock.svelte';
	import AboutBlock from '$lib/components/organisms/blocks/AboutBlock/AboutBlock.svelte';
	import NewsletterBlock from '$lib/components/organisms/blocks/NewsletterBlock/NewsletterBlock.svelte';
	import ThemelinesBlock from '$lib/components/organisms/blocks/ThemelinesBlock/ThemelinesBlock.svelte';
	import ProjectsBlock from '$lib/components/organisms/blocks/ProjectsBlock/ProjectsBlock.svelte';

	export let data; // komt van +page.server.js
	const { projects, themes, contentPage } = data;
</script>

<HeroBlock title="Samen bouwen aan een gezonde wijk" />

<AboutBlock
	buttonLink="/over-ons"
	title="Over ons"
	description={contentPage.body}
	variant="preview"
	image="/images/over-ons.png"
	showButton={true}
/>

<ThemelinesBlock
	{themes}
	buttonText="Lees meer"
	buttonLink="/over-ons#theme-line"
	buttonPosition="flex-end"
/>

<ProjectsBlock
	{projects}
	title="Projecten"
	buttonText="Bekijk alle projecten"
	buttonLink="/projecten"
	buttonPosition="flex-end"
/>
<NewsletterBlock
	title="Benieuwd naar nog meer projecten?"
	description="Abboneer op onze nieuwsbrief om op de hoogte te blijven."
/>
