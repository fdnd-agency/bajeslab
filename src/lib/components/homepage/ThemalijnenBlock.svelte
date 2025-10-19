<script>
	export let title = 'Themalijnen';
	export let themes = [];
	export let buttonText = 'Lees meer';
	export let buttonLink = '/over-ons#theme-line';
	export let buttonPosition = 'center';

	import Button from '../ui/Button.svelte';
</script>

<section class="container">
	<h2 class="title">{title}</h2>
	<ul>
		{#each themes as theme}
			<li>
				<img src={theme.icon} alt={theme.alt} fetchpriority="high"/>
				<p>{theme.text}</p>
				<div class="stripe {theme.accent}"></div>
			</li>
		{/each}
	</ul>
	<Button href={buttonLink} text={buttonText}/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 1em;
	}
	section h2 {
		margin-top: var(--spacing-md);
	}
	section ul {
		display: flex;
		flex-direction: column;
		margin-top: var(--spacing-md);
		margin-bottom: var(--spacing-md);
		gap: 3em;
	}
	section ul li {
		text-align: center;
		list-style-type: none;
	}
	section ul li img {
		width: 150px;
		height: 150px;
	}
	section ul li p {
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
		section h2 {
			margin-bottom: var(--spacing-sm);
			align-self: start;
		}
		section ul {
			margin: 0 1em;
			gap: 5px;
			flex-direction: row;
		}
		section ul :nth-child(2) {
			margin-top: var(--spacing-lg);
		}
	}
</style>
