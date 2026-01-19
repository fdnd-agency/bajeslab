<script>
	import { PUBLIC_ASSETS_URL } from '$env/static/public';

	import MailIcon from '$lib/components/atoms/icons/MailIcon.svelte';

	let { contact } = $props();

	const imageUrl = contact.image
		? `${PUBLIC_ASSETS_URL}/${contact.image}`
		: null;
</script>

<section class="container-card">
	<section class="card">
		{#if imageUrl}
			<img src={imageUrl} alt="Photo of {contact.name}" />
		{/if}

		<section class="info">
			<h2 class="name subtitle">{contact.name}</h2>
			<p class="position text">{contact.position}</p>

			{#if contact.link}
				<div class="contact-item">
					<MailIcon size="30" />
					<a href="mailto:{contact.link}">{contact.link}</a>
				</div>
			{/if}
		</section>
	</section>
</section>

<style>
	.container-card {
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
	}

	.card {
		max-width: 400px;
		width: 100%;
		display: grid;
		grid-template-rows: auto;
		gap: var(--spacing-md);
	}

	.info {
		display: grid;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.contact-item {
		display: flex;
		align-items: center;
		height: fit-content;
		margin-top: var(--spacing-md);
		gap: var(--spacing-xs);
	}

	.contact-item a {
		color: var(--color-link);
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	@container (min-width: 600px) {
		.container-card {
			width: 100%;
			max-width: 700px;
			padding-right: 0;
			padding-left: 0;
		}
		.card {
			display: grid;
			width: 100%;
			max-width: 600px;
			grid-template-columns: 200px 1fr;
			grid-template-rows: 1.5rem 3rem auto;
			gap: var(--spacing-md);
			align-items: start;
		}

		img {
			grid-row: 1 / -1;
			width: 100%;
			max-width: 200px;
		}

		.contact-item {
			margin-top: 0;
		}

		.info {
			display: grid;
			grid-template-rows: subgrid;
			grid-row: 1 / -1;
			gap: var(--spacing-xs);
		}
	}
</style>
