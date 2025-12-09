<script>
	import HeroBlock from '$lib/components/organisms/blocks/HeroBlock.svelte';
	import Overons from '$lib/components/organisms/blocks/Overons.svelte';
	import NewsletterBlock from '$lib/components/organisms/blocks/NewsletterBlock/NewsletterBlock.svelte';
	import ThemelinesBlock from '$lib/components/organisms/blocks/ThemelinesBlock/ThemelinesBlock.svelte';
	import ProjectsBlock from '$lib/components/organisms/blocks/ProjectsBlock/ProjectsBlock.svelte';

	export let data; // komt van +page.server.js
	const { projects, themes } = data;
</script>

<HeroBlock title="Samen bouwen aan een gezonde wijk" />
<Overons
	buttonLink="/over-ons"
	title="Over ons"
	description="In de voormalige Bijlmer Bajes werken gebiedsontwikkelaar AM, de HvA en verschillende partners sinds 2018 samen in het Healthy Urban Living Lab Bajeskwartier. Het doel is een groene, gezonde en inclusieve buurt voor alle bewoners. Onderzoekers en studenten bekijken samen met bewoners en gebruikers hoe het gebied zo ingericht kan worden dat het bewegen en ontmoeten stimuleert. Dit is belangrijk voor gezondheid en welzijn ..."
	image="/images/over-ons.png"
/>
<ThemelinesBlock
	{themes}
	buttonText="Lees meer"
	buttonLink="/over-ons#theme-line"
	buttonPosition="flex-end"
/>

<ProjectsBlock
	{projects}
	title="Onze projecten"
	buttonText="Bekijk alle projecten"
	buttonLink="/projecten"
	buttonPosition="flex-end"
/>
<NewsletterBlock
	title="Benieuwd naar nog meer projecten?"
	description="Abboneer op onze nieuwsbrief om op de hoogte te blijven."
/>
