<script>
  let { children } = $props();
  import Nav from '$lib/components/homepage/Nav.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
</script>
<Nav />
<svelte:head>
	<link rel="stylesheet" href="/css/app.css" />
	<title>Healthy Urban Living Lab</title>
	<meta
		name="description"
		content="Healthy Urban Living Lab is een living lab van de Hogeschool van Amsterdam, dat samen met haar partners de ontwikkeling van het Bajeskwartier in Amsterdam ondersteunt door middel van onderzoeksprojecten met studenten en partners."
	/>
</svelte:head>
<div class="layout">
	<main>
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
	}
</style>
