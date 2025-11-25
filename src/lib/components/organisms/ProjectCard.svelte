<script>
	import ArrowIcon from "../atoms/icons/ArrowIcon.svelte";

  let {
    project,
    title = 'Projecten',
    buttonText = 'Bekijk alle projecten',
    buttonLink = '/projecten',
    buttonPosition = 'flex-end',
    ASSETS_URL = "https://fdnd-agency.directus.app/assets"
  } = $props();

  // Deze functie draait server-side én client-side
  function truncateText(text, wordLimit = 20) {
    if (!text) return '';
    const plainText = text.replace(/<[^>]*>/g, '');
    const words = plainText.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  
  const shortDescription = truncateText(project.description, 20);
</script>

  <section>
    <picture>
      <source
        type="image/webp"
        srcset={`
          ${ASSETS_URL}/${project.cover_image}?format=webp&width=250&quality=80&fit=cover 250w,
          ${ASSETS_URL}/${project.cover_image}?format=webp&width=400&quality=80&fit=cover 400w,
        `}
        sizes=""
      />

      <source
        type="image/avif"
        srcset={`
          ${ASSETS_URL}/${project.cover_image}?format=avif&width=250&quality=80&fit=cover 250w,
          ${ASSETS_URL}/${project.cover_image}?format=avif&width=400&quality=80&fit=cover 400w,
        `}
        sizes=""
      />

      <img
        src={`${ASSETS_URL}/${project.cover_image}?format=jpg&width=400&quality=80&fit=cover`}
        srcset={`
          ${ASSETS_URL}/${project.cover_image}?format=jpg&width=250&quality=80&fit=cover 250w,
          ${ASSETS_URL}/${project.cover_image}?format=jpg&width=400&quality=80&fit=cover 400w,
        `}
        sizes=""
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
    h2{
      text-transform: uppercase;
      line-height: 1.5;
    }

    p{
      line-height: 1.5;
    }

    a{
      display: flex;
      flex-direction: row;
    }

    img{
      width: 400px;
      height: 250px;
      object-fit: cover;
    }

    section{
      width: 400px;
      height: auto;
      display: flex;
      flex-direction: column;
    }

    a{
      color: var(--color-accent3-l1);
      display: flex;
	    align-items: center;
    }
  
  </style>