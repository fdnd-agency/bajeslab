<script>
	import ProjectsOverview from "$lib/organisms/ProjectsOverview.svelte";

  let { data } = $props()
</script>

<main>
  <h1>Projecten</h1>
  <p>Pagina beschrijving</p>
  <ProjectsOverview projects={data.projects} />
</main>
