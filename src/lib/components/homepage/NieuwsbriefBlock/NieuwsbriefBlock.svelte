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
			<input type="email" name="email" placeholder="Uw e-mail adres hier..." required/>
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
		padding: 2em;
		background-color: var(--color-accent2-l1);
		border-color: var(--color-accent2-base);
		border-radius: 7px;
		text-align: center;
	}
	h3 {
		font-size: 32px;
		font-weight: 700;
	}
	form {
	}
</style>
