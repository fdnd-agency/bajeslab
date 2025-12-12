<script>
	const totalCells = Array(30 * 30);
</script>

<section>
	<ul class="raster">
		{#each totalCells as Cell}
			<li class="raster-cel"></li>
		{/each}
	</ul>
</section>

<style>
	section {
		--grid-size: 30;
		--neon-rgb: 139, 248, 16;

		background-color: #0d1f3b;
		width: 100vw;
		min-height: 100vh;
	}

	/* Raster */
	.raster {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;

		display: grid;
		grid-template-columns: repeat(var(--grid-size), 1fr);
		grid-template-rows: repeat(var(--grid-size), 1fr);
	}

	.raster-cel {
		transition: background-color 2s ease;
		border: 1px solid rgba(var(--neon-rgb), 0.03);
	}

	.raster-cel:hover {
		background-color: rgba(var(--neon-rgb), 0.4);
		transition-duration: 0.02s;
	}
</style>
