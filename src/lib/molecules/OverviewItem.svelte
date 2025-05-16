<script>
  import DirectusImage from '$lib/atoms/DirectusImage.svelte';

	let {
		image,
    imageAlt,
		width,
		height,
    href = null,
		itemClass = '',
    contentClass = '',
    children,
    loading = 'lazy'
	} = $props();
</script>

{#if href}
  <li class={itemClass}>
    <a {href}>
      <DirectusImage imageId={image?.filename_disk ?? ""} {width} {height} alt={imageAlt} {loading} />
		<div class={contentClass}>
      {@render children()}
      </div>
    </a>
  </li>
{:else}
  <li class={itemClass}>
    <DirectusImage imageId={image?.filename_disk ?? ""} {width} {height} alt={imageAlt} {loading} />
		<div class={contentClass}>
      {@render children()}
    </div>
  </li>
{/if}