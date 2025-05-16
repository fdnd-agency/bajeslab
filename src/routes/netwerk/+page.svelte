<script>
	import PeopleOverview from "$lib/organisms/PeopleOverview.svelte";

	let { data } = $props();
</script>

<main>
  <h1>Netwerk</h1>
  <p>Netwerk pagina beschrijving</p>
  <PeopleOverview people={data.people} />
</main>

