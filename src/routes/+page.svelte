<script>
	import Hero from '$lib/components/homepage/Hero.svelte';
	import ThemalijnenBlock from '$lib/components/homepage/ThemalijnenBlock.svelte';

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

<Hero />
<ThemalijnenBlock
	title="Themalijnen"
	themes={myThemes}
	buttonText="Lees meer"
	buttonLink="/over-ons#theme-line"
	buttonPosition="flex-end"
/>
