<script>
    import NetwerkCard from '$lib/components/molecules/NetwerkCard/NetwerkCard.svelte';
    
    let { 
      title = 'Ons team',
      people = []
    } = $props();

</script>
  
<section class="container">
  <h2 class="title">{title}</h2>
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