<script>
  export let projects = [];

  const ASSETS_URL = "https://fdnd-agency.directus.app/assets"
</script>

<div>
    {#each projects as project}
      <a href={project.link}>
        <picture>
          <source 
            type="image/avif"
            srcset={`
              ${ASSETS_URL}/${project.cover_image}?format=avif&width=400&quality=80&fit=cover 400w,
              ${ASSETS_URL}/${project.cover_image}?format=avif&width=800&quality=80&fit=cover 800w,
              ${ASSETS_URL}/${project.cover_image}?format=avif&width=1200&quality=80&fit=cover 1200w
            `}
            sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw"
          />
  
          <source 
            type="image/webp"
            srcset={`
              ${ASSETS_URL}/${project.cover_image}?format=webp&width=400&quality=80&fit=cover 400w,
              ${ASSETS_URL}/${project.cover_image}?format=webp&width=800&quality=80&fit=cover 800w,
              ${ASSETS_URL}/${project.cover_image}?format=webp&width=1200&quality=80&fit=cover 1200w
            `}
            sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw"
          />
  
          <img 
            src={`${ASSETS_URL}/${project.cover_image}?format=jpg&width=400&quality=80&fit=cover`} 
            srcset={`
              ${ASSETS_URL}/${project.cover_image}?format=jpg&width=400&quality=80&fit=cover 400w,
              ${ASSETS_URL}/${project.cover_image}?format=jpg&width=800&quality=80&fit=cover 800w,
              ${ASSETS_URL}/${project.cover_image}?format=jpg&width=1200&quality=80&fit=cover 1200w
            `}
            sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw"
            loading="lazy"
            alt={project.title}
          />
        </picture>
  
        <div class="overlay">
          <p>{project.title}</p>
          <span class="arrow"></span>
        </div>
      </a>
    {/each}
</div>
      
<style>
  div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
  }

  div a {
      position: relative;
      display: block;
      overflow: hidden;
      border-radius: 8px;
  }

  div img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      display: block;
      border-radius: 8px;
      transition: transform 0.3s ease;
  }

/* Overlay */
  div .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
  }

  div .overlay p {
      color: var(--color-neutral1-l3);
      font-family: Urbanist, sans-serif;
      font-size: clamp(1rem, 2vw, 1.5rem);
      transform: translateY(-20px);
      transition: transform 0.3s ease;
  }

  div .overlay .arrow {
      position: absolute;
      bottom: clamp(1rem, 2vw, 2rem);
      right: clamp(1rem, 2vw, 2rem);
      width: clamp(1rem, 2vw, 2rem);
      height: clamp(1rem, 2vw, 2rem);
      border-top: 2px solid var(--color-neutral1-l3);
      border-right: 2px solid var(--color-neutral1-l3);
      transform: rotate(45deg) translateX(0);
      transition: transform 0.3s ease;
  }

/* Hover effect */
  div a img {
    transition: transform 0.3s ease;
  }

  div .overlay {
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.3s ease;
  }

  div .overlay p {
    transform: translateY(0);
    transition: transform 0.3s ease;
  }

  @media (min-width: 500px) {
    div .overlay {
      opacity: 0;
      pointer-events: none;
    }

    div a:hover img {
      transform: scale(1.05);
    }

    div a:hover .overlay {
      opacity: 1;
      pointer-events: auto;
    }
  }

/* Responsive */
  @media (min-width: 500px) {
      div {
          grid-template-columns: repeat(3, 1fr);
      }
      div img {
          height: 200px;
      }
  }

  @media (min-width: 1000px) {
      div img {
          height: 300px;
      }
  }
</style>