<script>
  import DirectusImage from '$lib/atoms/DirectusImage.svelte';

	let { data } = $props();
</script>

<h1>{data.projects[0].title}</h1>
<p>{@html data.projects[0].description}</p>
<DirectusImage
	imageId={data.projects[0]?.cover_image?.filename_disk}
	width={data.projects[0]?.cover_image?.width}
	height={data.projects[0]?.cover_image?.height}
	alt={data.projects[0]?.cover_image?.description}
	loading="eager"
/>
<p>{data.projects[0]?.type}</p>
<p>{data.projects[0]?.partners}</p>

<h2>Foto's</h2>
<ul>
	{#each data.projects[0]?.images as image}
		<li>
			<DirectusImage
				imageId={image?.directus_files_id?.filename_disk}
				width={image?.directus_files_id?.width}
				height={image?.directus_files_id?.height}
				alt={image?.directus_files_id?.description}
				loading="lazy"
			/>
		</li>
	{/each}
</ul>
