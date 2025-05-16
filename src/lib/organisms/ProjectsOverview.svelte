<script>
  import OverviewItem from '$lib/molecules/OverviewItem.svelte';

	let { projects } = $props();
</script>

{#if projects && projects.length > 0}
	<ul>
		{#each projects as project (project.id)}
			<OverviewItem
				image={project.cover_image}
        imageAlt={project.title}
        width={project.cover_image?.width}
        height={project.cover_image?.height}
				href={`/projecten/${project.slug}`}
        itemClass={$css("project-card")}
        contentClass={$css("project-card-content")}
			>
        <h2>{project.title}</h2>
        <p>{@html project.description}</p>
        <p>{project.type}</p>
        <p>{project.partners}</p>
      </OverviewItem>
		{/each}
	</ul>
{:else}
	<p>Geen projecten gevonden. Probeer het later opnieuw.</p>
{/if}

<style>
  .project-card {}
  .project-card-content {}
</style>