<script>
	export let href = '';
	export let text = 'Lees meer';
	export let position = 'center'; 
	export let className = '';

	import ArrowIcon from '../icons/ArrowIcon.svelte';
</script>

<a class="button {position} {className}" {href}>{text} <ArrowIcon /></a>

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
