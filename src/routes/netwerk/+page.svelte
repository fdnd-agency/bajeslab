<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import NetwerkCard from '$lib/components/molecules/NetwerkCard/NetwerkCard.svelte';

	// Props van parent component
	let { title = 'Netwerk', data } = $props();

	// Referentie naar het grid element in de DOM
	let gridRef;
	let titleElement;

	// Lifecycle hook: wordt uitgevoerd na component mount
	onMount(async () => {
		if (browser) {
			// Importeer GSAP en ScrollTrigger dynamisch (code splitting)
			const { gsap } = await import('gsap');
			const { ScrollTrigger } = await import('gsap/ScrollTrigger');
			const { SplitText } = await import('gsap/SplitText');

			// Registreer ScrollTrigger plugin bij GSAP
			gsap.registerPlugin(ScrollTrigger);
			gsap.registerPlugin(SplitText);

			// Functie die de scroll animaties toepast
			const applyAnimations = () => {
				// Verwijder alle bestaande ScrollTriggers om duplicaten te voorkomen
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

				// Stop als gridRef nog niet bestaat
				if (!gridRef) return;

				// Bepaal hoeveel kolommen het grid heeft
				const columnCount = window
					.getComputedStyle(gridRef)
					.getPropertyValue('grid-template-columns')
					.split(' ').length; // Tel aantal kolommen

				// Selecteer alle cards
				const allCards = gridRef.querySelectorAll('.card-wrapper');
				const split = new SplitText(titleElement, { type: 'chars' });

				// Als er 4 of meer kolommen zijn, pas effect toe
				if (columnCount >= 4) {
					// Selecteer alle cards in kolom 1 (1e, 5e, 9e, etc.)
					const column1Cards = gridRef.querySelectorAll('.card-wrapper:nth-child(4n+1)');
					// Selecteer alle cards in kolom 3 (3e, 7e, 11e, etc.)
					const column3Cards = gridRef.querySelectorAll('.card-wrapper:nth-child(4n+3)');

					// Zet CSS class voor styling
					allCards.forEach((card) => card.classList.remove('no-offset'));
					column1Cards.forEach((card) => card.classList.add('offset'));
					column3Cards.forEach((card) => card.classList.add('offset'));

					// Timeline voor beide kolommen
					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: gridRef,
							start: 'top bottom',
							end: 'bottom top',
							scrub: true
						}
					});

					// Animeer van CSS positie (250px) naar -250px
					tl.to(
						[column1Cards, column3Cards],
						{
							y: -250,
							ease: 'none',
							overwrite: 'auto'
						},
						0
					);
				} else {
					// Bij minder dan 4 kolommen: verwijder offset class en reset
					allCards.forEach((card) => {
						card.classList.remove('offset');
						card.classList.add('no-offset');
					});
					gsap.set(allCards, { clearProps: 'all' });
				}

				gsap.from(split.chars, {
					y: '100%', // Start precies onder de regel
					opacity: 0, // Subtiele fade-in erbij
					duration: 1.2, // Iets langer voor een rustig gevoel
					stagger: 0.03, // Heel kort achter elkaar voor een vloeiende beweging
					ease: 'power4.out', // De meest 'high-end' easing (start vlot, eindigt heel traag)
					delay: 0.1
				});
			};

			// Voer animaties uit bij component mount
			applyAnimations();

			// Maak ResizeObserver om grid changes te detecteren
			const observer = new ResizeObserver(applyAnimations);
			// Start met observeren van gridRef voor size changes
			observer.observe(gridRef);
			console.log(SplitText);

			// Cleanup functie: wordt uitgevoerd bij component unmount
			return () => {
				observer.disconnect();
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			};
		}
	});
</script>

<section class="container">
	<section class="title-wrapper">
		<h1 class="title" bind:this={titleElement}>{title}</h1>
	</section>

	<div class="scroll-indicator-wrapper">
		<div class="scroll-indicator">
			<div class="scroll-progress"></div>
		</div>
	</div>

	<section class="netwerk-cards" bind:this={gridRef}>
		{#each data.people as person}
			<div class="card-wrapper">
				<NetwerkCard {person} />
			</div>
		{/each}
	</section>
</section>

<style>
	.netwerk-cards {
		display: grid;
		column-gap: var(--spacing-md);
		row-gap: var(--spacing-lg);
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}

	/* Scroll Indicator Styling */
	.scroll-indicator-wrapper {
		position: sticky;
		top: 0;
		z-index: 100;
		margin-bottom: var(--spacing-lg);
	}

	.scroll-indicator {
		width: 100%;
		height: 1rem;
		background-color: rgba(0, 0, 0, 0.1);
		overflow: hidden;
	}

	.scroll-progress {
		height: 100%;
		background: var(--color-accent2-base);
		width: 0%;
		animation: scroll-progress linear;
		animation-timeline: scroll(root);
	}

	@keyframes scroll-progress {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}

	/* Offset alleen als de class actief is (4+ kolommen) */
	:global(.card-wrapper.offset) {
		transform: translateY(250px);
		will-change: transform;
	}

	/* Geen offset bij minder kolommen */
	:global(.card-wrapper.no-offset) {
		transform: translateY(0);
	}
</style>
