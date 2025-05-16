<script>
  import OverviewItem from '$lib/molecules/OverviewItem.svelte';

	let { people } = $props();
</script>

{#if people && people.length > 0}
	<ul>
		{#each people as person (person.id)}
			<OverviewItem
				image={(person.image ?? null)}
        imageAlt={person.name}
        width={person.image?.width ?? 600}
        height={person.image?.height ?? 400}
        itemClass={$css("person-card")}
        contentClass={$css("person-card-content")}
			>
        <h2>{person.name}</h2>
        <p>{person.position}</p>
        <p>{person.partners[0]?.name}</p>
      </OverviewItem>
		{/each}
	</ul>
{:else}
	<p>Geen personen gevonden. Probeer het later opnieuw.</p>
{/if}

<style>
  .person-card {
    
  }

  .person-card-content {

  }
</style>