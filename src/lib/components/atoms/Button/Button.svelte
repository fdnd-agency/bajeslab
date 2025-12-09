<script>
	// Fallback value
	let { 
		text = 'Lees meer', 
		href = '', 
		position = 'center', 
		className = '',
		reload = false,
		direction = 'next'
	} = $props();

	import ArrowIcon from '../icons/ArrowIcon.svelte';
</script>
  
<a 
  class="button button--{direction} {position} {className}"
  {href}
  {...(reload ? {'data-sveltekit-reload': true} : {})}
>
  {text}
  <ArrowIcon class={className} />
</a>
  
<style>
	.button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
	}

	.project-arrow {
		width: 0.8rem;
		height: 0.8rem;
	}

	.flex-start { align-self: flex-start; }
	.center { align-self: center; }
	.flex-end { align-self: flex-end; }
</style>
