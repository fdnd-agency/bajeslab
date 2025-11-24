<script>
	import HeroBlock from '$lib/components/organisms/blocks/HeroBlock.svelte';
	import Overons from '$lib/components/organisms/blocks/Overons.svelte';
	import ThemalijnenBlock from '$lib/components/organisms/blocks/ThemalijnenBlock/ThemalijnenBlock.svelte';
	import ProjectenBlock from '$lib/components/organisms/blocks/ProjectenBlock.svelte';
	import NieuwsbriefBlock from '$lib/components/organisms/blocks/NieuwsbriefBlock.svelte';

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
<ThemalijnenBlock
	title="Themalijnen"
	{themes}
	buttonText="Lees meer"
	buttonLink="/over-ons#theme-line"
	buttonPosition="flex-end"
/>
<ProjectenBlock {projects} />
<NieuwsbriefBlock
	title="Benieuwd naar nog meer projecten?"
	description="Abboneer op onze nieuwsbrief om op de hoogte te blijven."
/>
