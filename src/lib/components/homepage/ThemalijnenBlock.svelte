<script>
	export let title = 'Themalijnen';
	export let themes = [];
	export let buttonText = 'Lees meer';
	export let buttonLink = '/over-ons#theme-line';
	export let buttonPosition = 'center';

	import Button from '../ui/Button.svelte';
</script>

<section class="container theme-lines">
	<h2 class="theme-line-title">{title}</h2>
	<ul class="theme-line-list">
		{#each themes as theme}
			<li class="theme-item">
				<img src={theme.icon} alt={theme.alt} />
				<p>{theme.text}</p>
				<div class="stripe {theme.accent}"></div>
			</li>
		{/each}
	</ul>
	<Button href={buttonLink} text={buttonText} position={buttonPosition} />
</section>

<style>
	/* Theme Lines */
	.theme-lines {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 1em;
	}
	.theme-line-title {
		font-size: 2.5em;
		margin-top: var(--spacing-md);
	}
	.theme-line-list {
		display: flex;
		flex-direction: column;
		margin-top: var(--spacing-md);
		margin-bottom: var(--spacing-md);
		gap: 3em;
	}
	.theme-item {
		text-align: center;
		list-style-type: none;
	}
	.theme-item p {
		width: 80%;
		margin: 0 auto;
		margin-top: var(--spacing-md);
	}

	/* Stripe */
	.stripe {
		width: 80%;
		height: 5px;
		margin-left: auto;
		margin-right: auto;
		margin-top: var(--spacing-sm);
		background-color: var(--color-primary-base);
	}
	.accent1 {
		background-color: var(--color-accent1-base);
	}
	.accent2 {
		background-color: var(--color-accent2-base);
	}
	.neutral1 {
		background-color: var(--color-neutral1-base);
	}

	@media (min-width: 768px) {
		/* Theme Lines */
		.theme-line-list {
			margin: 0 1em;
			gap: 5px;
			flex-direction: row;
		}
		.theme-item:nth-child(2) {
			margin-top: var(--spacing-lg);
		}
	}
</style>
