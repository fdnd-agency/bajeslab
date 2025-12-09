<script>
	import NewsletterForm from '$lib/components/molecules/NewsletterForm/NewsletterForm.svelte';

	let {
		title = 'Benieuwd naar nog meer projecten?',
		description = 'Ontvang onze nieuwsbrief en mis geen enkel update.'
	} = $props();
</script>

<section class="container">
	<div class="newsletter-section">
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
	<NewsletterForm />
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

	/* Newsletter section */
	h3 {
		font-size: 32px;
		font-weight: 700;
	}
	.newsletter-section p {
		margin: 1em 0em;
	}

	@media (min-width: 768px) {
		section {
			padding: 1em 3em;
			margin: 2em 1em;
		}
		.newsletter-section {
			align-content: center;
			text-align: start;
		}
		.newsletter-section p {
			margin-top: 0.5em;
		}
	}
	@media (min-width: 1024px) {
		section {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			gap: 1em;
			margin: 2em auto;
		}
	}
</style>
