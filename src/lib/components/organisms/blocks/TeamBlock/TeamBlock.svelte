<script>
  import { onMount } from 'svelte';
	import { browser } from '$app/environment';
  import NetwerkCard from '$lib/components/molecules/NetwerkCard/NetwerkCard.svelte';
    
  let { 
    title = 'Ons team',
    people = []
  } = $props();

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

  <div class="team-grid">
    {#each people as person}
        <NetwerkCard {person} />
    {:else}
      <p>Er zijn geen personen gevonden voor deze partner.</p>
    {/each}
  </div>
</section>

<style>
  .title{
    text-align: center;
    @media (min-width: 768px) {
      justify-content: flex-start;
      text-align: left;
    }
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-lg);
  }
</style>