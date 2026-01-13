<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import ContactCard from '$lib/components/molecules/ContactCard/ContactCard.svelte';
	let { title = 'Contact', data } = $props();

	let titleElement;

	onMount(async () => {
		if (browser) {
			const { gsap } = await import('gsap');
			const { SplitText } = await import('gsap/SplitText');

			gsap.registerPlugin(SplitText);

			// We splitsen de tekst in karakters
			const split = new SplitText(titleElement, { type: 'chars' });

			gsap.from(split.chars, {
				y: '100%', // Start precies onder de regel
				opacity: 0, // Subtiele fade-in erbij
				duration: 1.2, // Iets langer voor een rustig gevoel
				stagger: 0.03, // Heel kort achter elkaar voor een vloeiende beweging
				ease: 'power4.out', // De meest 'high-end' easing (start vlot, eindigt heel traag)
				delay: 0.1
			});
		}
	});
</script>

<section class="container">
	<section class="title-wrapper">
		<h1 class="title" bind:this={titleElement}>{title}</h1>
	</section>

	<section class="info">
		<p class="text">Heeft u vragen over ons werk of projecten? Neem gerust contact met ons op.</p>

		<p class="text">
			Algemene e-mail:
			<a href="mailto:" class="email"></a>
		</p>

		<p class="text">
			Algemene nummer:
			<a href="tel:" class="number"></a>
		</p>
	</section>

	<section class="contact-cards">
		{#each data.contacts as contact}
			<ContactCard {contact} />
		{/each}
	</section>
</section>

<style>
	.title{
		text-align: center;
			@media (min-width: 768px) {
			justify-content: flex-start;
			text-align: left;
			}
  	}
	
	.email,
	.number {
		font-weight: bold;

		&:hover {
			text-decoration: underline;
		}
	}
	.info {
		margin-bottom: var(--spacing-lg);
		margin-top: var(--spacing-sm);
		p {
			margin-bottom: var(--spacing-sm);
		}
	}
	.contact-cards {
		container-type: inline-size;
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-lg);
		margin-bottom: var(--spacing-lg);

		@media (min-width: 1200px) {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--spacing-lg);
		}
	}
</style>
