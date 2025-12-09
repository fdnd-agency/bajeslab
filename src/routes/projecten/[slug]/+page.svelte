<script>
  import Button from '$lib/components/atoms/Button/Button.svelte';
  export let data;

  // destructure de server-side data
  const { project, prev, next } = data;

  // Debug, kijk wat er in zit
  // console.log('Partners:', project.partners);
  // console.log('Images:', project.images);
</script>

<section class="container">
  <h1 class="subtitle">{project.title}</h1>

  <div class="project-info">
    <p class="project-year text">{project.year}</p>
    <p class="text">
      Partners: 
      {#if project.partners && project.partners.length > 0}
        <!-- Als er partners zijn, map de array naar hun titel en voeg ze samen met komma's -->
        {project.partners
          .map(p => p.hull_partners_id.title || 'Onbekend')
          .join(', ')}
      {:else}
        <!-- Als er geen partners zijn -->
        Geen partners
      {/if}
    </p>
  </div>
  
  <section class="project-description text">
    {@html project.description}
  </section>

  <!-- {#if project.images && project.images.length > 0} 
    <div class="images">
      {#each project.images as image}
      <picture>
        <source 
          srcset={`https://fdnd-agency.directus.app/assets/${image.directus_files_id.filename_disk}?format=avif&width=300&quality=80`}
          type="image/avif"
        />
        <source 
          srcset={`https://fdnd-agency.directus.app/assets/${image.directus_files_id.filename_disk}?format=webp&width=300&quality=80`}
          type="image/webp"
        />
        <img 
          src={`https://fdnd-agency.directus.app/assets/${image.directus_files_id.filename_disk}?width=300&quality=80`}
          alt={image.directus_files_id.title || 'Project afbeelding'}
          loading="lazy"
          decoding="async"
        />
      </picture>
    {/each}
    </div>
  {/if} -->

  <nav class="nav {prev && next ? 'both' : next ? 'only-next' : 'only-prev'}">
    {#if prev}
        <Button 
            href={`/projecten/${prev.slug}`} 
            reload 
            text={prev.title}
            direction="prev"
        />
    {/if}
    {#if next}
        <Button 
            href={`/projecten/${next.slug}`} 
            reload 
            text={next.title}
            direction="next"
        />
    {/if}
  </nav>
</section>

<style>
  .project-info {
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
    margin-bottom: var(--spacing-sm);
    margin-top: var(--spacing-sm);

    @media (min-width: 800px) {
      flex-direction: row;
      gap: clamp(2rem, 5vw, 5rem);
    }

    p{
      font-weight: bold;
      color: var(--color-accent1-base);
      -webkit-text-stroke: 0.5px currentColor; 
    }
  }

  .project-year{
    text-wrap: nowrap;
  }

  .container {
  max-width: 80ch;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

:global(.project-description p) {
  margin-bottom: var(--spacing-md);
  max-width: 65ch;
  width: 100%;
}
  :global(.project-description img) {
    display: block ;
    max-width: 50% ;
    width: 100% ;
    height: auto ;
    margin-bottom: var(--spacing-md);
    object-fit: cover;
  }

  .subtitle {
    margin-top: var(--spacing-lg);
  }
  
  .nav {
    display: flex;
    flex-direction: column;
    margin-top: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
    gap: var(--spacing-md);

    @media (min-width: 800px) {
      flex-direction: row;
    }
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

  .images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: 100%;
  }

  .images img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }
</style>
