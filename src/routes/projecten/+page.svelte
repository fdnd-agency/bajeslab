<script>
  import ProjectCard from "$lib/components/organisms/ProjectCard.svelte";

  let { data } = $props();
  let { projects } = data;
</script>

<h1>Projecten</h1>

<section>
  {#each projects as project}
    <ProjectCard {project} />
  {/each}
</section>

<style>
  section{
    display: grid;
    grid-template-columns: 1fr;
    gap: 5rem;
  }
</style>