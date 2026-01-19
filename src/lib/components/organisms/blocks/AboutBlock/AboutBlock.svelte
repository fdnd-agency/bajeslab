<script>
	import { PUBLIC_ASSETS_URL } from '$env/static/public';

	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import Button from '$lib/components/atoms/Button/Button.svelte';

	let {
		title = 'Over ons',
		description = 'In de voormalige Bijlmer Bajes werken gebiedsontwikkelaar AM, de HvA en verschillende partners sinds 2018 samen in het Healthy Urban Living Lab Bajeskwartier. Het doel is een groene, gezonde en inclusieve buurt voor alle bewoners. Onderzoekers en studenten bekijken samen met bewoners en gebruikers hoe het gebied zo ingericht kan worden dat het bewegen en ontmoeten stimuleert. Dit is belangrijk voor gezondheid en welzijn. Sinds 2023 bevindt de ontwikkeling van het Bajeskwartier zich in een nieuwe fase. De eerste gebouwen zijn opgeleverd, en uiteindelijk komen er 2.500 tot 3.500 mensen te wonen, verdeeld over 1.350 appartementen (huur en koop). De sociale huurwoningen bieden plek aan een diverse groep bewoners: studenten, ouderen, statushouders en mensen die extra begeleiding nodig hebben vanwege sociale of psychische problemen. Daarnaast zijn de middelbare school Spinoza 21st en Hotel Jansen, een verblijf voor internationale studenten en expats, in de wijk gevestigd.',
		variant = 'full',
		image = '/images/over-ons.png',
		videoSrc = '/videos/about.mp4',
		showButton = false,
		buttonLink = '/over-ons'
	} = $props();

	// Deze functie draait server-side én client-side
	function truncateText(text, wordLimit = 65) {
		if (!text) return '';
		const plainText = text.replace(/<[^>]*>/g, '');
		const words = plainText.split(' ');
		if (words.length <= wordLimit) return text;
		return words.slice(0, wordLimit).join(' ') + '...';
	}

	// $derived: Toont korte tekst bij 'preview', volledige tekst bij 'full'
	const displayDescription = $derived(
		variant === 'preview' ? truncateText(description, 65) : description
	);

	let titleElement;

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
		}
	});
</script>

<section class="container">
	<section class="title-wrapper">
		<h2 class="title" bind:this={titleElement}>{title}</h2>
	</section>

	{#if variant === 'full'}
		<video class="video-full" controls>
			<source src={videoSrc} type="video/mp4" />
			<track kind="captions" />
		</video>
	{/if}

	<div class="over-ons-container">
		<img src={image} alt="A sign that says 'Welcome to the Bajestuin'"/>

		<div class="text">
			{#if variant === 'full'}
				<h3>Samenbouwen aan een gezonde wijk</h3>
				<!-- {@html} zorgt ervoor dat HTML-tags (zoals <p>) correct worden gerenderd -->
			{/if}{@html displayDescription}
		</div>

		{#if showButton}
			<div class="button-wrapper">
				<Button href={buttonLink} />
			</div>
		{/if}
	</div>
</section>

<style>
	.video-full {
		width: 100%;
		max-width: 100%;
		height: auto;
		margin-block: var(--spacing-md);
		padding-inline: var(--spacing-sm);
	}

	.over-ons-container {
		display: grid;
		column-gap: var(--spacing-lg);
		margin-block-start: var(--spacing-md);
		text-align: left;
		grid-template-areas:
			'text'
			'image'
			'button';
	}
	h2 {
		text-align: center;
	}

	img {
		grid-area: image;
		width: 100%;
		height: 100%;
		object-fit: cover;
		margin-bottom: var(--spacing-md);
	}

	.text {
		grid-area: text;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
		margin-bottom: var(--spacing-md);
	}
	.text h3 {
		font-size: var(--spacing-md);
		text-wrap: stable;
	}

	.button-wrapper {
		grid-area: button;
		margin-top: var(--spacing-lg);
	}

	/* DESKTOP LAYOUT */
	@media (min-width: 768px) {
		.video-full {
			aspect-ratio: 16 / 9;
			padding-inline: 0;
		}

		.over-ons-container {
			grid-template-columns: 1fr 1fr;
			align-items: center;
			grid-template-areas:
				'text image'
				'text image'
				'button image';
		}

		h2 {
			text-align: left;
		}

		.text {
			gap: var(--spacing-sm);
			margin-bottom: 0;
		}

		.button-wrapper {
			justify-self: end;
		}
	}
</style>
