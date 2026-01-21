<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { gsap } from '$lib/gsap-config';
	import Button from '$lib/components/atoms/Button/Button.svelte';

	let {
		title = 'Over ons',
		description = '...',
		variant = 'full',
		image = '/images/over-ons.png',
		videoSrc = '/videos/about.mp4',
		showButton = false,
		buttonLink = '/over-ons'
	} = $props();

	function truncateText(text, wordLimit = 65) {
		if (!text) return '';
		const plainText = text.replace(/<[^>]*>/g, '');
		const words = plainText.split(' ');
		if (words.length <= wordLimit) return text;
		return words.slice(0, wordLimit).join(' ') + '...';
	}

	const displayDescription = $derived(
		variant === 'preview' ? truncateText(description, 65) : description
	);

	let titleElement;

	onMount(async () => {
		if (browser) {
			const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

			if (!prefersReducedMotion) {
				const { SplitText } = await import('gsap/SplitText');
				const { ScrollTrigger } = await import('gsap/ScrollTrigger');
				gsap.registerPlugin(SplitText);
				gsap.registerPlugin(ScrollTrigger);

				const split = new SplitText(titleElement, { type: 'chars' });
				gsap.from(split.chars, {
					y: '100%',
					opacity: 0,
					duration: 1.2,
					stagger: 0.03,
					ease: 'power4.out',
					delay: 0.1,
					scrollTrigger: {
						trigger: titleElement,
						start: 'top 80%'
					}
				});
			}
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
		<img src={image} alt="A sign that says 'Welcome to the Bajestuin'" />

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
