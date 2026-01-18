<script>
  import { onMount } from 'svelte';
  import ArrowIcon from '$lib/components/atoms/icons/ArrowIcon.svelte'
  
  let {
    project,
    ASSETS_URL = "https://fdnd-agency.directus.app/assets"
  } = $props();

  // foto inlaad animatie met gsap
  let pictureElement;
  let imageContainer;

  onMount(async () => {
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    
    gsap.registerPlugin(ScrollTrigger);
    
    const img = imageContainer.querySelector('img');
    
    const startAnimation = () => {
      gsap.fromTo(
        pictureElement,
        { clipPath: 'inset(100% 100% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.1,
          scrollTrigger: {
            trigger: imageContainer,
            start: 'top 90%',
            once: true
          }
        }
      );
    };
    
    // kijken of de afbeelding al geladen is
    if (img) {
      if (img.complete) {
        startAnimation();
      } else {
        img.addEventListener('load', startAnimation);
      }
    }
  });
</script>

<section class="project-card">
  <div class="picture-wrapper" bind:this={imageContainer}>
    <div class="diagonal-line"></div>
    
    <picture bind:this={pictureElement}>
      <source
        type="image/avif"
        srcset={`${ASSETS_URL}/${project.cover_image}?format=avif&width=300&quality=80&fit=cover 300w, ${ASSETS_URL}/${project.cover_image}?format=avif&width=800&quality=80&fit=cover 800w`}
        sizes="(max-width: 800px) 100vw, 50vw"
      />
      <img
        src={`${ASSETS_URL}/${project.cover_image}?format=jpg&width=800&quality=80&fit=cover`}
        loading="lazy"
        alt={project.title}
      />
    </picture>
  </div>
  
  <h2 id={project.title} class="subtitle">{project.title}</h2>
  <p class="text">{@html project.description}</p>
  <a href={`/projecten/${project.slug}`} class="project-link" aria-labelledby={project.title} >
    Bekijk het project
    <span class="arrow-container">
      <ArrowIcon className="project-arrow" />
    </span>
  </a>
</section>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 4;
    row-gap: 0;
  }
  
  .picture-wrapper {
    grid-row: 1;
    position: relative;
    background: white;
    border: 1px solid var(--color-primary-base);
    aspect-ratio: 16 / 9;
    max-height: 400px;
  }
  
  .diagonal-line {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom right,
      transparent calc(50% - 1px),
      var(--color-primary-base) calc(50% - 1px),
      var(--color-primary-base) 50%,
      transparent 50%
    );
    pointer-events: none; 
    z-index: 0;
  }
  
  picture {
    display: block;
    position: absolute;
    top: -2px;    
    left: -2px;   
    right: -2px;  
    bottom: -2px;
    z-index: 1; 
    clip-path: inset(100% 100% 0% 0%);
    overflow: hidden; 
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  section:hover img {
    transform: scale(1.05);
  }

  .project-link {
    grid-row: 4;
    color: var(--color-accent3-l1);
    font-weight: 600;
    text-decoration: none;
    display: flex;
    align-items: center; 
    gap: 0.5rem;
    line-height: 1;
  }

  .arrow-container {
    display: flex;
    align-items: center;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
  }

  section:hover .arrow-container {
    transform: translateX(10px); 
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
    /* De truncate logica voor exact 4 regels */
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>