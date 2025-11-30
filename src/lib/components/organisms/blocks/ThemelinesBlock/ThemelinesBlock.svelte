<script>
	export let themes = [];
	export let title = 'Themalijnen';
	export let showIntro = false;
	export let layout = 'row';

	const ASSETS_URL = 'https://fdnd-agency.directus.app/assets';

	import Button from '$lib/components/atoms/Button/Button.svelte';
	import ThemeCard from '$lib/components/molecules/ThemeCard/ThemeCard.svelte';

	export let showButton = true;
	export let buttonText = 'Lees meer';
	export let buttonLink = '/over-ons#theme-line';
	export let buttonPosition = 'center';
</script>

<section class="container">
	<h2 class="title">{title}</h2>
	<ul class="{layout}-layout">
		{#each themes as theme}
			<ThemeCard {theme} {layout} {showIntro} />
		{/each}
	</ul>
	{#if showButton}
		<Button href={buttonLink} text={buttonText} position={buttonPosition} />
	{/if}
</section>

<style>
	section {
		container-type: inline-size;
		container-name: themes-section;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 1em;
		width: 100%;
	}
	section h2 {
		margin-top: var(--spacing-md);
	}
	section ul {
		display: flex;
		flex-direction: column;
		margin-top: var(--spacing-md);
		margin-bottom: var(--spacing-md);
		gap: 3em;
		padding: 0;
	}

	/* Container query */
	@container themes-section (min-width: 768px) {
		section h2 {
			margin-bottom: var(--spacing-sm);
			align-self: start;
		}
		section ul {
			margin: 1em 1em 0 1em;
			gap: 5px;
		}

		/* Row layout */
		.row-layout {
			flex-direction: row;
		}
		/* .row-layout li:nth-child(even) {
			margin-top: var(--spacing-lg);
		} */

		/* Column layout */
		.column-layout {
			flex-direction: column;
			gap: var(--spacing-sm);
		}
	}
</style>
