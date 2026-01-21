<script>
	import { PUBLIC_ASSETS_URL } from '$env/static/public';
	import Button from '$lib/components/atoms/Button/Button.svelte';
    import ThemeCard from '$lib/components/molecules/ThemeCard/ThemeCard.svelte';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { gsap } from '$lib/gsap-config';


	let {
		themes = [],
		title = 'Themalijnen',
		showIntro = false,
		layout = 'row',
		showButton = true,
		buttonText = 'Lees meer',
		buttonLink = '/over-ons#theme-line',
		buttonPosition = 'center'
	} = $props();

    let cardsContainer;
    let titleElement;

    onMount(async () => {
        if (browser) {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            if (!prefersReducedMotion) {
                const { SplitText } = await import('gsap/SplitText');
                const { ScrollTrigger } = await import('gsap/ScrollTrigger');
                gsap.registerPlugin(ScrollTrigger);
                gsap.registerPlugin(SplitText);

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
