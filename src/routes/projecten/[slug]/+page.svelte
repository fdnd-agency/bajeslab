<script>
  import Button from '$lib/components/ui/Button.svelte';
  export let data;

  // destructure de server-side data
  const { project, prev, next } = data;
</script>

<section class="container">
  <h1 class="subtitle">{project.title}</h1>

  <div class="project-info">
    <p class="text">{project.year}</p>
    <p class="text">Partners: {project.partners}</p>
  </div>

  <section class="project-description text">
    {@html project.description}
  </section>

  <!-- Optioneel: afbeeldingen -->
  <!--
  <div class="images">
    {#each project.images as id}
      <img src={`https://fdnd-agency.directus.app/assets/${id}`} alt={`Project image ${id}`} />
    {/each}
  </div>
  -->

  <nav class="nav {prev && next ? 'both' : next ? 'only-next' : 'only-prev'}">
    {#if prev}
      <Button href={`/projecten/${prev.slug}`} reload text={prev.title} />
    {/if}
    {#if next}
      <Button href={`/projecten/${next.slug}`} reload text={next.title} />
    {/if}
  </nav>
</section>

<style>
  p {
    color: var(--color-accent1-base);
    font-weight: 900;
  }

  .nav {
    display: flex;
    margin-top: 2rem;
  }

  .nav.both {
    justify-content: space-between;
  }

  .nav.only-next {
    justify-content: flex-end;
  }

  .nav.only-prev {
    justify-content: flex-start;
  }
</style>
