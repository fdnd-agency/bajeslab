<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	// Loading en showFeedback zit standaard uit
	let loading = false;
	let showFeedback = false;

	// Reset en toon feedback bij nieuwe form submission
	// Als form gesubmit is zet showFeeback en verwijder na 4 seconden
	$: if ($page.form) {
		showFeedback = true;
		setTimeout(() => {
			showFeedback = false;
		}, 4000);
	}

	// Stop loading
	$: if ($page.form?.success !== undefined) {
		setTimeout(() => {
			loading = false;
		}, 500);
	}

	export let title = 'Inside informatie?';
	export let description = 'Ontvang onze nieuwsbrief en mis geen enkel update.';
</script>

<section class="container">
	<img src="/icons/newsletter-amico-1.svg" alt="Newsletter amico" fetchpriority="high" />
	<div class="newsletter-section">
		<h3>{title}</h3>
		<p>{description}</p>
		<form method="post" use:enhance on:submit={() => (loading = true)}>
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
		margin: 2em 1em;
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
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			padding: 0em 3em;
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
