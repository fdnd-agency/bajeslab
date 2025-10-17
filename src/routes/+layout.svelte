<script>
  let { children } = $props();
  import Nav from '$lib/components/homepage/Nav.svelte';
</script>
<Nav />
<svelte:head>
  <title>Healthy Urban Living Lab</title>
  <meta name="description" content="Healthy Urban Living Lab is een living lab van de Hogeschool van Amsterdam, dat samen met haar partners de ontwikkeling van het Bajeskwartier in Amsterdam ondersteunt door middel van onderzoeksprojecten met studenten en partners." />
</svelte:head>

{@render children()}