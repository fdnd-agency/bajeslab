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

	<ul class="blip-list">
		<li class="blip-container">
			<button id="target-blip" class="raster-cel pulse-glow" popovertarget="target-card-1">.</button
			>
		</li>
		<li class="blip-container">
			<button id="target-blip" class="raster-cel pulse-glow" popovertarget="target-card-2">.</button
			>
		</li>
		<li class="blip-container">
			<button id="target-blip" class="raster-cel pulse-glow" popovertarget="target-card-3">.</button
			>
		</li>
		<li class="blip-container">
			<button id="target-blip" class="raster-cel pulse-glow" popovertarget="target-card-4">.</button
			>
		</li>
		<li class="blip-container">
			<button id="target-blip" class="raster-cel pulse-glow" popovertarget="target-card-5">.</button
			>
		</li>
		<li class="blip-container">
			<button id="target-blip" class="raster-cel pulse-glow" popovertarget="target-card-6">.</button
			>
		</li>
	</ul>

	<div>
		<dialog id="target-card-1" class="popover-card" popover>
			<h2>SIGNAL DECODED</h2>
			<p>Found pulse 1</p>
		</dialog>
		<dialog id="target-card-2" class="popover-card" popover>
			<h2>SIGNAL DECODED</h2>
			<p>Found pulse 2</p>
		</dialog>
		<dialog id="target-card-3" class="popover-card" popover>
			<h2>SIGNAL DECODED</h2>
			<p>Found pulse 3</p>
		</dialog>
		<dialog id="target-card-4" class="popover-card" popover>
			<div class="card-inhoud">
				<h2>SIGNAL DECODED</h2>
				<p>Found pulse 4</p>
			</div>
		</dialog>
		<dialog id="target-card-5" class="popover-card" popover>
			<h2>SIGNAL DECODED</h2>
			<p>Found pulse 5</p>
		</dialog>
		<dialog id="target-card-6" class="popover-card" popover>
			<h2>SIGNAL DECODED</h2>
			<p>Found pulse 6</p>
		</dialog>
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

	/* Content layer */
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

	/* Blip */
	.blip-list li {
		position: absolute;
		z-index: 10;
		top: 80%;
		left: 70%;
	}
	.blip-list li:nth-child(1) {
		position: absolute;
		z-index: 10;
		top: 30%;
		left: 40%;
	}
	.blip-list li:nth-child(2) {
		position: absolute;
		z-index: 10;
		top: 50%;
		left: 80%;
	}
	.blip-list li:nth-child(3) {
		position: absolute;
		z-index: 10;
		top: 65%;
		left: 50%;
	}
	.blip-list li:nth-child(4) {
		position: absolute;
		z-index: 10;
		top: 70%;
		left: 20%;
	}
	.blip-list li:nth-child(5) {
		position: absolute;
		z-index: 10;
		top: 17%;
		left: 90%;
	}

	#target-blip {
		width: 10px;
		height: 10px;
		border-radius: 50%;

		background-color: rgb(var(--neon-rgb));
		cursor: pointer;
		border: 1px solid white;
	}

	/* Popover card */
	.popover-card {
		position: relative;
		width: 100%;
		top: 35%;
		max-width: 800px;
		margin: 0 auto;

		height: 300px;
		z-index: 10;

		padding: 2rem;
		border: 5px solid rgba(var(--green-rgb), 1);

		text-shadow: 0 0 5px rgba(var(--neon-rgb), 0.7);

		color: rgb(var(--neon-rgb));
		text-shadow: 0 0 5px rgba(var(--neon-rgb));
		border: 5px solid rgba(var(--green-rgb));
		background: black;
	}

	/* Pulse effect */
	@keyframes pulse {
		0% {
			box-shadow: 0 0 5px 0 rgba(var(--neon-rgb), 0.8);
		}
		70% {
			box-shadow:
				0 0 20px 5px rgba(var(--neon-rgb), 0.9),
				0 0 30px 10px rgba(var(--neon-rgb), 0.5);
		}
		100% {
			box-shadow: 0 0 5px 0 rgba(var(--neon-rgb), 0.8);
		}
	}

	.pulse-glow {
		animation: pulse 5s infinite ease-in-out;
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
