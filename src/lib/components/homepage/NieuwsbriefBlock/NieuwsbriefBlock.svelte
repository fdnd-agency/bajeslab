<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
</script>

<section class="container">
	<img src="/icons/newsletter-amico-1.svg" alt="Newsletter amico" fetchpriority="high" />
	<h3>Inside informatie?</h3>
	<p>Ontvang onze nieuwsbrief en mis geen enkel update.</p>
	<form method="post" use:enhance>
		<label>
			<input type="email" name="email" placeholder="Uw e-mail adres hier..." required />
		</label>
		<button type="submit">Aboneer</button>
	</form>
	<p>We zullen je niet spammen!</p>

	{#if $page.form?.success === true}
		<p>Ingeschreven!</p>
	{/if}

	{#if $page.form?.success === false}
		<p>Mislukt!</p>
	{/if}
</section>

<style>
	section {
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
	h3 {
		font-size: 32px;
		font-weight: 700;
	}

	form {
		display: flex;
		justify-content: center;
		margin: 1em 0;
		border: none;
	}
	form input {
		padding: 1em;
		border-radius: 7px 0px 0px 7px;
		border: none;
	}
	form button {
		padding: 1em;
		border-radius: 0px 7px 7px 0px;
		color: var(--color-primary-base);
		background-color: var(--color-accent2-base);
		font-weight: 700;
		font-family: 'Urbanist';
		border: none;
	}
</style>
