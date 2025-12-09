<script>
  import ProjectCard from "$lib/components/molecules/ProjectCard/ProjectCard.svelte";

  let { data } = $props();
  let { projects } = data;
</script>

<section class="container">
  <h1 class="title">Projecten</h1>

  <section class="projects-grid">
    {#each projects as project}
    <ProjectCard {project} spanTwo={project.featured} />
    {/each}
  </section>
</section>

<style>
  h1{
    margin-bottom: var(--spacing-lg);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: var(--spacing-lg);
  }

  @media (min-width: 800px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1200px) {
    .projects-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>