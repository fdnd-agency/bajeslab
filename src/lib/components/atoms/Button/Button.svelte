<script>
	// Fallback value
	let { text = 'Lees meer', href = '', position = 'center', className = '' } = $props();

	import ArrowIcon from '../icons/ArrowIcon.svelte';
  </script>
  
  <a class="button {position} {className}"{href}{...(reload ? {'data-sveltekit-reload': true} : {})}>
	{text} <ArrowIcon />
  </a>
  
  <style>
	/* Button positions */
	.flex-start {
		align-self: flex-start;
	}
	.center {
		align-self: center;
	}
	.flex-end {
		align-self: flex-end;
	}
  </style>
  