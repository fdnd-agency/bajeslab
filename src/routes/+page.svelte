<script>
	  import HeroBlock from '$lib/components/homepage/HeroBlock.svelte';
	  import ThemalijnenBlock from '$lib/components/homepage/ThemalijnenBlock.svelte';
	  import NieuwsbriefBlock from '$lib/components/homepage/NieuwsbriefBlock.svelte';
    import ProjectenBlock from '$lib/components/homepage/ProjectenBlock.svelte';
	import Overons from '$lib/components/homepage/Overons.svelte';

    export let data; // komt van +page.server.js
    const { projects } = data;
  
    // Content //
	  const myThemes = [
		{
			icon: '/icons/theme-line-amico-1.svg',
			alt: 'Icoon themalijn 1',
			text: 'Community building / gemeenschapsontwikkeling'
		},
		{
			icon: '/icons/theme-line-amico-2.svg',
			alt: 'Icoon themalijn 2',
			text: '(Semi-) openbare (groene) ruimten: gebruik en collectieve beheervormen',
			accent: 'accent1'
		},
		{
			icon: '/icons/theme-line-amico-3.svg',
			alt: 'Icoon themalijn 3',
			text: 'Rol van sport en bewegen voor de buurt',
			accent: 'accent2'
		}
	];
</script>

<HeroBlock title="Samen bouwen aan een gezonde wijk" />
<Overons />
<ThemalijnenBlock
	title="Themalijnen"
	themes={myThemes}
	buttonText="Lees meer"
	buttonLink="/over-ons#theme-line"
	buttonPosition="flex-end"
/>
<NieuwsbriefBlock
	title="Benieuwd naar nog meer projecten?"
	description="Abboneer op onze nieuwsbrief om op de hoogte te blijven."
/>
<ProjectenBlock {projects}/>
