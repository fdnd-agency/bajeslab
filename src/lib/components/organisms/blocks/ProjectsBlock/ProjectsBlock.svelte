<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import ProjectCard from '$lib/components/molecules/ProjectCard/ProjectCard.svelte';
	import Button from '$lib/components/atoms/Button/Button.svelte';

	let {
		ASSETS_URL = 'https://fdnd-agency.directus.app/assets',
		projects = [],
		title = 'Projecten',
		buttonText = 'Bekijk alle projecten',
		buttonLink = '/projecten',
		buttonPosition = 'flex-end'
	} = $props();

	let highlightedProjects = $derived(projects.filter((project) => project.highlighted === true));

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

	<div class="projects-grid">
		{#each highlightedProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>

	<Button href={buttonLink} text={buttonText} position={buttonPosition} />
</section>

<style>
	.title {
		text-align: center;

		@media (min-width: 768px) {
			justify-content: flex-start;
			text-align: left;
		}
	}

	section {
		display: flex;
		flex-direction: column;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: 1fr;
		justify-content: center;
		gap: var(--spacing-lg);
		margin-bottom: var(--spacing-lg);
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
