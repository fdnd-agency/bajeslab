<script>
	import Button from '$lib/components/atoms/Button/Button.svelte';

	let {
		title = 'Over ons',
		description = 'In de voormalige Bijlmer Bajes werken gebiedsontwikkelaar AM, de HvA en verschillende partners sinds 2018 samen in het Healthy Urban Living Lab Bajeskwartier. Het doel is een groene, gezonde en inclusieve buurt voor alle bewoners. Onderzoekers en studenten bekijken samen met bewoners en gebruikers hoe het gebied zo ingericht kan worden dat het bewegen en ontmoeten stimuleert. Dit is belangrijk voor gezondheid en welzijn. Sinds 2023 bevindt de ontwikkeling van het Bajeskwartier zich in een nieuwe fase. De eerste gebouwen zijn opgeleverd, en uiteindelijk komen er 2.500 tot 3.500 mensen te wonen, verdeeld over 1.350 appartementen (huur en koop). De sociale huurwoningen bieden plek aan een diverse groep bewoners: studenten, ouderen, statushouders en mensen die extra begeleiding nodig hebben vanwege sociale of psychische problemen. Daarnaast zijn de middelbare school Spinoza 21st en Hotel Jansen, een verblijf voor internationale studenten en expats, in de wijk gevestigd.',
		variant = 'full',
		image = '/images/over-ons.png',
		showButton = false,
		buttonLink = 'flex-end'
	} = $props();
</script>

<section class="container">
	<h2 class="title">{title}</h2>

	<div class="over-ons-container">
		<img src={image} alt="Bord met de tekst Welkom bij de Bajestuin" />

		<p class="text">{description}</p>

		{#if showButton}
			<div class="button-wrapper">
				<Button href={buttonLink} />
			</div>
		{/if}
	</div>
</section>

<style>
	/* MOBILE LAYOUT */
	.over-ons-container {
		display: grid;
		column-gap: var(--spacing-lg);
		padding-inline: var(--spacing-sm);
		margin-block-start: var(--spacing-md);
		text-align: left;
		grid-template-areas:
			'image'
			'text'
			'button';
	}

	h2 {
		text-align: center;
	}

	img {
		grid-area: image;
		width: 100%;
		height: auto;
		object-fit: cover;
		margin-bottom: var(--spacing-md);
	}

	.text {
		grid-area: text;
		margin-bottom: var(--spacing-sm);
	}

	.button-wrapper {
		grid-area: button;
	}

	/*  DESKTOP LAYOUT */
	@media (min-width: 768px) {
		.over-ons-container {
			grid-template-columns: 1fr 1.1fr;
			align-items: center;
			grid-template-areas:
				'text image'
				'text image'
				'button image';
		}

		h2 {
			text-align: left;
		}

		img {
			aspect-ratio: 4 / 3;
		}

		.button-wrapper {
			justify-self: end;
		}
	}
</style>
