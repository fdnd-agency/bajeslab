<script>
	import ArrowIcon from '$lib/components/atoms/icons/ArrowIcon.svelte'

  let {
    project,
    ASSETS_URL = "https://fdnd-agency.directus.app/assets"
  } = $props();

  // Deze functie draait server-side én client-side
  function truncateText(text, wordLimit = 19) {
    if (!text) return '';
    const plainText = text.replace(/<[^>]*>/g, '');
    const words = plainText.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  
  const shortDescription = truncateText(project.description, 19);
</script>

  <section>
    <picture>
      <!-- AVIF: beste compressie -->
      <source
        type="image/avif"
        srcset={`
          ${ASSETS_URL}/${project.cover_image}?format=avif&width=300&quality=80&fit=cover 300w,
          ${ASSETS_URL}/${project.cover_image}?format=avif&width=500&quality=80&fit=cover 500w,
          ${ASSETS_URL}/${project.cover_image}?format=avif&width=800&quality=80&fit=cover 800w,
          ${ASSETS_URL}/${project.cover_image}?format=avif&width=1200&quality=80&fit=cover 1200w
        `}
        sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
  
      <!-- WebP: goede fallback -->
      <source
        type="image/webp"
        srcset={`
          ${ASSETS_URL}/${project.cover_image}?format=webp&width=300&quality=80&fit=cover 300w,
          ${ASSETS_URL}/${project.cover_image}?format=webp&width=500&quality=80&fit=cover 500w,
          ${ASSETS_URL}/${project.cover_image}?format=webp&width=800&quality=80&fit=cover 800w,
          ${ASSETS_URL}/${project.cover_image}?format=webp&width=1200&quality=80&fit=cover 1200w
        `}
        sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
  
      <!-- JPG: universele fallback -->
      <img
        src={`${ASSETS_URL}/${project.cover_image}?format=jpg&width=800&quality=80&fit=cover`}
        srcset={`
          ${ASSETS_URL}/${project.cover_image}?format=jpg&width=300&quality=80&fit=cover 300w,
          ${ASSETS_URL}/${project.cover_image}?format=jpg&width=500&quality=80&fit=cover 500w,
          ${ASSETS_URL}/${project.cover_image}?format=jpg&width=800&quality=80&fit=cover 800w,
          ${ASSETS_URL}/${project.cover_image}?format=jpg&width=1200&quality=80&fit=cover 1200w
        `}
       sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        alt={project.title}
      />
    </picture>
   
    <h2>{project.title}</h2>
    <p>{@html shortDescription}</p>
    <a href={`/projecten/${project.slug}`}>Bekijk het project
      <ArrowIcon className="arrow" />
    </a>
  </section>
  
  <style>
    section {
      width: 100%;
      display: grid;
      grid-template-rows: subgrid;
      grid-row: span 4;
      row-gap: 0 
    }
  
    picture {
      grid-row: 1;
    }
  
    h2 {
      grid-row: 2;
      margin-top: var(--spacing-sm);
      margin-bottom: var(--spacing-sm);
      text-transform: uppercase;
      line-height: 1.5;
      font-size: clamp(20px, 5vw, 25px);
    }
  
    p {
      grid-row: 3;
      line-height: 1.5;
      margin-bottom: var(--spacing-md);
    }
  
    a {
      grid-row: 4;
      color: var(--color-accent3-l1);
      font-weight: 600;
    }
  
    img {
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      max-height: 400px;
    }
  </style>