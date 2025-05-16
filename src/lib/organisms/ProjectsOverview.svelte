<script>
	import OverviewItem from '$lib/molecules/OverviewItem.svelte';

	let { projects, truncate = false } = $props();

	let description = truncate ? truncateWords(projects[0].description, 15) : projects[0].description

	function truncateWords(string, numberWords) {
		if (!string) return '';
		const words = string.split(' ');
		return words.slice(0, numberWords).join(' ') + (words.length > numberWords ? '...' : '');
	}
</script>

{#if projects && projects.length > 0}
	<ul>
		{#each projects as project (project.id)}
			<OverviewItem
				image={project.cover_image}
				imageAlt={project.title}
				href={`/projecten/${project.slug}`}
				itemClass="project-card"
				contentClass="project-card-content"
			>
			<h2>{project.title}</h2>
			{#if truncate}
				{@html description}
			{:else}
				{@html (project.description)}
			{/if}
			<p>{project.type}</p>
			<p>{project.partners}</p>
			</OverviewItem>
		{/each}
	</ul>
{:else}
	<p>Geen projecten gevonden. Probeer het later opnieuw.</p>
{/if}
