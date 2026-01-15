<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

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

	let titleElement;
	let cardsContainer;

	onMount(async () => {
		if (browser) {
			const { gsap } = await import('gsap');
			const { SplitText } = await import('gsap/SplitText');
			const { ScrollTrigger } = await import('gsap/ScrollTrigger');

			gsap.registerPlugin(ScrollTrigger);
			gsap.registerPlugin(SplitText);

			// We splitsen de tekst in karakters
			const split = new SplitText(titleElement, { type: 'chars' });

			gsap.from(split.chars, {
				y: '100%', // Start precies onder de regel
				opacity: 0, // Subtiele fade-in erbij
				duration: 1.2, // Iets langer voor een rustig gevoel
				scrollTrigger: titleElement,
				start: 'bottom 10%',
				stagger: 0.03, // Heel kort achter elkaar voor een vloeiende beweging
				ease: 'power4.out', // De meest 'high-end' easing (start vlot, eindigt heel traag)
				delay: 0.1
			});

			gsap.from(cardsContainer.children, {
				opacity: 0,
				y: 50,
				duration: 0.8,
				stagger: 0.4,
				scrollTrigger: {
					trigger: cardsContainer,
					start: 'top 80%'
				}
			});
		}
	});
</script>

<section class="container">
	<section class="title-wrapper">
		<h2 class="title" bind:this={titleElement}>{title}</h2>
	</section>
	<ul class="{layout}-layout" bind:this={cardsContainer}>
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
		width: 100%;
	}
	section h2 {
		margin-top: var(--spacing-md);
	}
	section ul {
		display: flex;
		flex-direction: column;
		margin-top: var(--spacing-md);
		margin-bottom: var(--spacing-lg);
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
