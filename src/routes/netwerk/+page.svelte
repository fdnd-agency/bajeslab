<script>
    import { onMount } from 'svelte';
    import NetwerkCard from "$lib/components/molecules/NetwerkCard/NetwerkCard.svelte";
    
    let { 
        title = "Netwerk", 
        data 
    } = $props();
    
    let gridRef;
    
    onMount(async () => {
        const { gsap } = await import('https://cdn.skypack.dev/gsap@3.12.2');
        const { ScrollTrigger } = await import('https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);
        
        const applyAnimations = () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    if (!gridRef) return;

    const gridStyles = window.getComputedStyle(gridRef);
    const columnCount = gridStyles
        .getPropertyValue('grid-template-columns')
        .split(' ').length;

    const hasFourColumns = columnCount >= 4;

    if (hasFourColumns) {
        const column1Cards = gridRef.querySelectorAll('.card-wrapper:nth-child(4n+1)');
        const column3Cards = gridRef.querySelectorAll('.card-wrapper:nth-child(4n+3)');

        gsap.set(column1Cards, { y: 250 });
        gsap.set(column3Cards, { y: 250 });

        gsap.to(column1Cards, {
            y: -250,
            scrollTrigger: {
                trigger: gridRef,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            }
        });

        gsap.to(column3Cards, {
            y: -250,
            scrollTrigger: {
                trigger: gridRef,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            }
        });
    } else {
        const allCards = gridRef.querySelectorAll('.card-wrapper');
        gsap.set(allCards, { y: 0 });
    }
    };

    // Pas animaties toe bij laden
    applyAnimations();
        
    // Herlaad animaties bij resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            applyAnimations();
        }, 200);
    });
    });
</script>

<section class="container">
    <h1 class="title">{title}</h1>
    <section class="netwerk-cards" bind:this={gridRef}>
        {#each data.people as person}
            <div class="card-wrapper">
                <NetwerkCard {person} />
            </div>
        {/each}
    </section>
</section>

<style>
h1{
    margin-bottom: var(--spacing-lg);
}
.netwerk-cards {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.container {
    padding: var(--spacing-md, 2rem);
}

.title {
    margin-bottom: var(--spacing-lg, 2rem);
}
</style>