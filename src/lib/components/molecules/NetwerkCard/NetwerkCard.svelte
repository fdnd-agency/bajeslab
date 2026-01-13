<script>
  let { person } = $props();
  const assetUrl = (id) => `https://fdnd-agency.directus.app/assets/${id}`;
</script>

<section class="card">
  <div class="image-container">
    {#if person.image}
      <img
        src={assetUrl(person.image)}
        alt="Photo of {person.name}"
        class="person-image"
        loading="lazy"
      />
    {:else}
      <div class="person-placeholder"></div>
    {/if}
  </div>

  <section class="content">
    <h2 class="subtitle">{person.name}</h2>
    <p class="text">{person.position}</p>
  </section>

  <div class="partners">
    {#if person.partners?.length}
      {#each person.partners as partner}
        {#if partner.hull_partners_id?.logo}
          <a 
            href={partner.hull_partners_id.link}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img
              src={assetUrl(partner.hull_partners_id.logo)}
              alt="Logo of {partner.hull_partners_id.title}"
              class="partner-logo"
              loading="lazy"
            />
          </a>
        {/if}
      {/each}
    {/if}
  </div>
</section>

<style>
.card {
  text-align: center;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
}

.image-container {
  width: 100%;
}

.person-image,
.person-placeholder {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.person-placeholder {
  background-color: var(--color-neutral1-base);
}

.content {
  margin-top: var(--spacing-sm);
}

.partners {
  display: flex;
  justify-content: center;
  /* margin-bottom: var(--spacing-lg); */
}

.partner-logo {
  height: 4.7rem;
}
</style>