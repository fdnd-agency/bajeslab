<script>
	export let href = '';
	export let text = 'Lees meer';
	export let position = 'center';
	export let className = '';
	export let reload = false;
  
	import ArrowIcon from '../icons/ArrowIcon.svelte';
  </script>
  
  <a class="button {position} {className}"{href}{...(reload ? {'data-sveltekit-reload': true} : {})}>
	{text} <ArrowIcon />
  </a>
  
  <style>
	/* Button positions */
	:global(.flex-start) {
	  align-self: flex-start;
	}
	:global(.center) {
	  align-self: center;
	}
	:global(.flex-end) {
	  align-self: flex-end;
	}
  </style>
  