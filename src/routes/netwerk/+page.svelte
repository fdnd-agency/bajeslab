<script>
    import { onMount } from 'svelte';
    import NetwerkCard from "$lib/components/molecules/NetwerkCard/NetwerkCard.svelte";
    
    // Props van parent component
    let { 
        title = "Netwerk", 
        data 
    } = $props();
    
    // Referentie naar het grid element in de DOM
    let gridRef;
    
    // Lifecycle hook: wordt uitgevoerd na component mount
    onMount(async () => {
        // Importeer GSAP en ScrollTrigger dynamisch (code splitting)
        const { gsap } = await import('https://cdn.skypack.dev/gsap@3.12.2');
        const { ScrollTrigger } = await import('https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger');
        
        // Registreer ScrollTrigger plugin bij GSAP
        gsap.registerPlugin(ScrollTrigger);
        
        // Functie die de scroll animaties toepast
        const applyAnimations = () => {
            // Verwijder alle bestaande ScrollTriggers om duplicaten te voorkomen
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            
            // Stop als gridRef nog niet bestaat
            if (!gridRef) return;
            
            // Bepaal hoeveel kolommen het grid heeft
            const columnCount = window.getComputedStyle(gridRef)
                .getPropertyValue('grid-template-columns')
                .split(' ').length; // Tel aantal kolommen
            
            // Selecteer alle cards
            const allCards = gridRef.querySelectorAll('.card-wrapper');
            
            // Als er 4 of meer kolommen zijn, pas effect toe
            if (columnCount >= 4) {
                // Selecteer alle cards in kolom 1 (1e, 5e, 9e, etc.)
                const column1Cards = gridRef.querySelectorAll('.card-wrapper:nth-child(4n+1)');
                // Selecteer alle cards in kolom 3 (3e, 7e, 11e, etc.)
                const column3Cards = gridRef.querySelectorAll('.card-wrapper:nth-child(4n+3)');
                
                // Zet CSS class voor styling
                allCards.forEach(card => card.classList.remove('no-offset'));
                column1Cards.forEach(card => card.classList.add('offset'));
                column3Cards.forEach(card => card.classList.add('offset'));
                
                // Timeline voor beide kolommen
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: gridRef,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    }
                });
                
                // Animeer van CSS positie (250px) naar -250px
                tl.to([column1Cards, column3Cards], { 
                    y: -250,
                    ease: 'none',
                    overwrite: 'auto',
                }, 0);
                
            } else {
                // Bij minder dan 4 kolommen: verwijder offset class en reset
                allCards.forEach(card => {
                    card.classList.remove('offset');
                    card.classList.add('no-offset');
                });
                gsap.set(allCards, { clearProps: 'all' });
            }
        };
        
        // Voer animaties uit bij component mount
        applyAnimations();
        
        // Maak ResizeObserver om grid changes te detecteren
        const observer = new ResizeObserver(applyAnimations);
        // Start met observeren van gridRef voor size changes
        observer.observe(gridRef);
        
        // Cleanup functie: wordt uitgevoerd bij component unmount
        return () => {
            observer.disconnect();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
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
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .container {
        padding: var(--spacing-md, 2rem);
    }

    .title {
        margin-bottom: var(--spacing-lg, 2rem);
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