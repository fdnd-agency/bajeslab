<script>
  import ProjectCard from '$lib/components/molecules/ProjectCard/ProjectCard.svelte';
  import Button from "$lib/components/atoms/Button/Button.svelte";
  
  let { 
    ASSETS_URL = "https://fdnd-agency.directus.app/assets", 
    projects = [], 
    title = 'Projecten', 
    buttonText = 'Bekijk alle projecten',
    buttonLink = '/projecten',
    buttonPosition = 'flex-end'
  } = $props();
  
  let highlightedProjects = $derived(projects.filter(project => project.highlighted === true));
</script>

<section class="container">
  <h2 class="title">{title}</h2>

  <div class="projects-grid">
    {#each highlightedProjects as project}
      <ProjectCard {project} />
    {/each}
  </div>

  <Button href={buttonLink} text={buttonText} position={buttonPosition} />
</section>

<style>
  .title {
    margin-bottom: var(--spacing-lg);
    text-align: center;

    @media (min-width: 768px) {
      justify-content: flex-start;
      text-align: left;
    }
  }

  section {
    display: flex;
    flex-direction: column;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
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