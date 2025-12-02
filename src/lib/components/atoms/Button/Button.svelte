<script>
	export let text = 'Lees meer';
	export let href = '';
	export let position = 'center';
	export let className = '';

	import ArrowIcon from '../icons/ArrowIcon.svelte';
</script>

<a class="button {position} {className}" {href}>{text} <ArrowIcon /></a>

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
