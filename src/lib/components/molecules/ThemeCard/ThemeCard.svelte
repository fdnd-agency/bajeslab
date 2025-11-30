<script>
	export let theme;
	export let showIntro = false;
	export let layout = 'row';
	const ASSETS_URL = 'https://fdnd-agency.directus.app/assets';
</script>

<li>
	<div class="{layout}-wrapper">
		<img src={`${ASSETS_URL}/${theme.illustration}`} alt="Theme icon" fetchpriority="high" />
		<p>{theme.titel}</p>
		{#if showIntro}
			<p>{theme.intro}</p>
		{/if}
	</div>
	<div class="{layout}-stripe {theme.accent}"></div>
</li>

<style>
	li {
		text-align: center;
		list-style-type: none;
	}

	li img {
		width: 150px;
		height: 150px;
	}
	li p {
		width: 80%;
		margin: 0 auto;
		margin-top: var(--spacing-md);
		font-size: 20px;
	}

	/* Stripe */
	.column-stripe {
		width: 80%;
		height: 5px;
		margin-left: auto;
		margin-right: auto;
		margin-top: var(--spacing-sm);
		background-color: var(--color-primary-base);
	}
	.row-stripe {
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
		/* Column layout */
		.column-layout {
			flex-direction: column;
		}
		.column-wrapper {
			display: flex;
			gap: 2em;
			align-items: center;
		}
		.column-layout li {
			text-align: left;
			margin-bottom: 3em;
		}
		.column-stripe {
			width: 100%;
			height: 5px;
			margin-left: auto;
			margin-right: auto;
			margin-top: var(--spacing-sm);
			background-color: var(--color-primary-base);
		}
	}
</style>
