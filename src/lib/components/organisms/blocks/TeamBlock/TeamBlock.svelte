<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { gsap } from '$lib/gsap-config'; 
    import NetwerkCard from '$lib/components/molecules/NetwerkCard/NetwerkCard.svelte';
    
    let { 
        title = 'Ons team',
        people = []
    } = $props();
    
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
    column-gap: var(--spacing-lg);
    row-gap: var(--spacing-md);
    margin-top: var(--spacing-md);
  }
</style>