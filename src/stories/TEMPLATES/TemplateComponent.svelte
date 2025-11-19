<script>
	export let className = '';
	export let title = 'Dit is een Svelte component';
	export let backgroundColor = '';
</script>

<div class={className} style="background-color: {backgroundColor}">{title}</div>

<style>
	.styling {
		padding: 20px;
		border: 1px solid #a4be5b;
		border-radius: 10px;
		background: white;
		border-style: dashed;
		background-color: #c8d89c;
	}
</style>
