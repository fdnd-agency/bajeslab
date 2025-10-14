<script>
	import ArrowIcon from '../icons/ArrowIcon.svelte';
</script>

<section class="container theme-lines">
	<h2 class="theme-line-title">Themalijnen</h2>
	<ul class="theme-line-list">
		<li class="theme-item">
			<img src="/icons/theme-line-amico-1.svg" alt="Icoon themalijn ​" />
			<p>Community building / gemeenschapsontwikkeling​</p>
			<div class="stripe"></div>
		</li>
		<li class="theme-item">
			<img src="/icons/theme-line-amico-2.svg" alt="Icoon themalijn​" />
			<p>(Semi-) openbare (groene) ruimten: gebruik en collectieve beheervormen​</p>
			<div class="stripe accent1"></div>
		</li>
		<li class="theme-item">
			<img src="/icons/theme-line-amico-3.svg" alt="Icoon themalijn​" />
			<p>Rol van sport en bewegen voor de buurt</p>
			<div class="stripe accent2"></div>
		</li>
	</ul>
	<a class="button" href="/over-ons#theme-line">Lees meer <ArrowIcon /></a>
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

	/* Buttons */
	.button {
		width: 90%;
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
		/* Buttons */
		.button {
			width: 200px;
			align-self: flex-end;
		}
	}
</style>
