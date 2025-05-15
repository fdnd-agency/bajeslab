<script>
  import DirectusImage from '$lib/atoms/DirectusImage.svelte';

	let {
		image,
    imageAlt,
		width,
		height,
    href,
		itemClass = '',
    contentClass = '',
    children,
    loading = 'lazy'
	} = $props();
</script>

<li class={itemClass}>
  <a {href}>
    <DirectusImage imageId={image.filename_disk} {width} {height} alt={imageAlt} {loading} />
		<div class={contentClass}>
      {@render children()}
    </div>
	</a>
</li>