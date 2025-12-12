<script>
	const totalCells = Array(30 * 30);
</script>

<section>
	<ul class="raster">
		{#each totalCells as Cell}
			<li class="raster-cel"></li>
		{/each}
	</ul>
	<div class="content-layer">
		<h1 class="card-title">DECRYPT PULSE ECHO</h1>
		<p class="card-description">
			Status: Signal Intercepted. Unstable data packets detected. Proceed to unlock the component's
			corrupted core.
		</p>
	</div>
</section>

<style>
	section {
		--grid-size: 30;
		--neon-rgb: 139, 248, 16;
		--green-rgb: 83, 253, 112;
		--white-rgb: 255, 255, 255;

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

	.content-layer {
		position: relative;
		width: 100%;
		max-width: 800px;
		margin: 0 auto;

		height: auto;
		z-index: 10;

		padding: 2rem;
		border: 5px solid rgba(var(--green-rgb), 1);

		text-shadow: 0 0 5px rgba(var(--neon-rgb), 0.7);

		color: rgb(var(--neon-rgb));
		text-shadow: 0 0 5px rgba(var(--neon-rgb));
		border: 5px solid rgba(var(--green-rgb));
	}

	.card-title {
		color: rgb(var(--green-rgb));
		font-size: 2.2em;
		margin-bottom: 0.5em;
		font-family: monospace;
	}

	.card-description {
		color: rgb(var(--white-rgb));
		font-size: 1.2em;
		max-width: 500px;
		line-height: 1.5;
		font-family: monospace;
	}

	@media (max-width: 768px) {
		.content-layer {
			padding: 1rem;
		}

		.card-title {
			font-size: 1.8rem;
		}

		.card-description {
			font-size: 1rem; 
		}
	}
</style>
