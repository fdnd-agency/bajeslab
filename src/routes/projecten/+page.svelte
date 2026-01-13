<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import ProjectCard from '$lib/components/molecules/ProjectCard/ProjectCard.svelte';

	let { data } = $props();
	let { projects } = data;

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

			return () => split.revert();
		}
	});
</script>

<section class="container">
	<section class="title-wrapper">
		<h1 class="title" bind:this={titleElement}>Projecten</h1>
	</section>

	<section class="projects-grid">
		{#each projects as project}
			<ProjectCard {project} spanTwo={project.featured} />
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
	h1 {
		margin: 0;
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: 1fr;
		justify-content: center;
		gap: var(--spacing-lg);
	}

	@media (min-width: 800px) {
		.projects-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1200px) {
		.projects-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
