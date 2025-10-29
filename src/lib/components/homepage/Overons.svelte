<script>
  import Button from '../ui/Button.svelte';
  export let buttonLink = '/over-ons';
  export let title = 'Over ons';
  export let description = `In de voormalige Bijlmer Bajes werken gebiedsontwikkelaar AM, de HvA en verschillende partners sinds 2018 samen in het Healthy Urban Living Lab Bajeskwartier. Het doel is een groene, gezonde en inclusieve buurt voor alle bewoners. Onderzoekers en studenten bekijken samen met bewoners en gebruikers hoe het gebied zo ingericht kan worden dat het bewegen en ontmoeten stimuleert. Dit is belangrijk voor gezondheid en welzijn ...`;
  export let image = '/images/over-ons.png';
</script>

<section class="container">
  <h2 class="title">{title}</h2>
  <img src={image} alt="Bord met de tekst Welkom bij de Bajestuin" />
  <p class="text">{description}</p>
  <Button href={buttonLink} />
</section>

<style>
/* MOBILE LAYOUT */
section {
  display: grid;
  gap: var(--spacing-sm);
  padding-inline: var(--spacing-sm);
  margin-block-start: var(--spacing-md);
  text-align: left;
  grid-template-areas:
    "title"
    "image"
    "text"
    "button";
}

h2 {
  grid-area: title;
  text-align: center;
}

img {
  grid-area: image;
  width: 100%;
  height: auto;
  border-radius: var(--spacing-xs);
  object-fit: cover;
}

.text {
  grid-area: text;
}

.button {
  grid-area: button;
}
</style>