<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	let loading = $state(false);
	let showFeedback = $state(false);

	// $effect voor Loading en Feedback state
	$effect(() => {
		if ($page.form) {
			showFeedback = true;

			// Stop loading
			if ($page.form?.success !== undefined) {
				setTimeout(() => {
					loading = false;
				}, 500);
			}

			// Hide feedback na 4 seconden
			setTimeout(() => {
				showFeedback = false;
			}, 4000);
		}
	});
</script>

<div class="form-content-wrapper">
	<form method="post" use:enhance onsubmit={() => (loading = true)}>
		<label for="email" class="visually-hidden"> E-mailadres </label>
		<input type="email" name="email" placeholder="vul uw email adres in" required />
		<button type="submit" disabled={loading}>
			{#if loading}
				<span class="loader"></span>
			{:else}
				<span>Abboneer</span>
			{/if}
		</button>
	</form>

	<!-- Als form is gesubmit en feedback is shown, check of form succes is dan show message -->
	<div class="form-status">
		{#if $page.form && showFeedback}
			{#if $page.form?.success}
				<p>{$page.form?.message}</p>
			{:else}
				<p>{$page.form?.message} Probeer het opnieuw.</p>
			{/if}
		{/if}
	</div>
</div>

<style>
	form {
		display: flex;
		justify-content: center;
		margin: var(--spacing-sm) 0;
		border: none;
	}
	form input {
		padding: var(--spacing-sm);
		border-radius: 7px 0px 0px 7px;
		border: none;
		height: 2.6rem;
	}
	form button {
		padding: var(--spacing-sm);
		border-radius: 0px 7px 7px 0px;
		color: var(--color-primary-base);
		background-color: var(--color-accent2-base);
		font-weight: 700;
		font-family: 'Urbanist';
		border: none;
		cursor: pointer;
		min-width: max-content;
		height: 2.6rem;
	}

	/* Form Status */
	.form-status {
		display: block;
		height: 1.8rem;
	}

	.loader {
		display: inline-block;
	}

	.visually-hidden:not(:focus):not(:active) {
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	@media (min-width: 768px) {
		form {
			justify-content: flex-start;
		}
		.form-status {
			text-align: left;
		}
	}
	@media (min-width: 1024px) {
		form input {
			width: 400px;
		}
		form button {
			padding: 1em 3em;
		}
	}
</style>
