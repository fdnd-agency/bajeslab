<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	let {
		title = 'Benieuwd naar nog meer projecten?',
		description = 'Ontvang onze nieuwsbrief en mis geen enkel update.'
	} = $props();

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

<section class="container">
	<div class="newsletter-section">
		<h3>{title}</h3>
		<p>{description}</p>
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
</section>

<style>
	section {
		container-type: initial;
		container-name: Newsletter;

		margin: 2em 1em;
		padding: 1em;
		background-color: var(--color-accent2-l3);
		border-color: var(--color-accent2-base);
		border-radius: 7px;
		text-align: center;
		font-family: 'Urbanist';
		border: 2px solid var(--color-accent2-base);
	}
	section img {
		width: 150px;
		height: 150px;
	}

	/* Newsletter section */
	h3 {
		font-size: 32px;
		font-weight: 700;
	}
	.newsletter-section p:first-of-type {
		margin-top: 1em;
	}
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
		height: 30px;
	}

	.loader {
		display: inline-block;
	}

	@media (min-width: 768px) {
		section {
			padding: 1em 3em;
			margin: 2em 1em;
		}
		section img {
			width: 300px;
			height: 300px;
		}
		.newsletter-section {
			align-content: center;
			text-align: start;
		}
		.newsletter-section p {
			margin-top: 0.5em;
		}
		form {
			justify-content: flex-start;
		}
	}
	@media (min-width: 1024px) {
		section {
			margin: 2em auto;
		}
		form label input {
			width: 400px;
		}
		form button {
			padding: 1em 3em;
		}
	}
</style>
