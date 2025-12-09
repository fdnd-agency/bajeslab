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
		<label>
			<input type="email" name="email" placeholder="vul uw email adres in" required />
		</label>
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
		margin: 1em 0;
		border: none;
	}
	form label input {
		padding: 1em;
		border-radius: 7px 0px 0px 7px;
		border: none;
		height: 42px;
	}
	form button {
		padding: 1em;
		border-radius: 0px 7px 7px 0px;
		color: var(--color-primary-base);
		background-color: var(--color-accent2-base);
		font-weight: 700;
		font-family: 'Urbanist';
		border: none;
		cursor: pointer;
		min-width: max-content;
		height: 42px;
	}

	/* Form Status */
	.form-status {
		display: block;
		text-align: left;
		height: 30px;
	}

	.loader {
		display: inline-block;
	}

	@media (min-width: 768px) {
		form {
			justify-content: flex-start;
		}
	}
	@media (min-width: 1024px) {
		form label input {
			width: 400px;
		}
		form button {
			padding: 1em 3em;
		}
	}
</style>
