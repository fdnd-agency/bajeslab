<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { gsap } from '$lib/gsap-config'; 

	import ProjectCard from '$lib/components/molecules/ProjectCard/ProjectCard.svelte';

	let { data } = $props();
	let { projects } = data;

	let titleElement;
    
    onMount(async () => {
        if (browser) {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            if (!prefersReducedMotion) {
                // Alleen animeren als reduced motion UIT staat
                const { SplitText } = await import('gsap/SplitText');
                gsap.registerPlugin(SplitText);
                
                const split = new SplitText(titleElement, { type: 'chars' });
                gsap.from(split.chars, {
                    y: '100%',
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.03,
                    ease: 'power4.out',
                    delay: 0.1
                });
            }
            // Bij reduced motion: title blijft gewoon zichtbaar (SplitText wordt niet uitgevoerd)
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
