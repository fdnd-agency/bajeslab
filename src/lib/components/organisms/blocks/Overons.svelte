<script>
	import Button from "$lib/components/atoms/Button/Button.svelte";

  export let title;
  export let description;
  export let image;
  export let buttonLink;
</script>

<section class="container">
  <h2 class="title">{title}</h2>
  <img src={image} alt="Bord met de tekst Welkom bij de Bajestuin" />
  <p class="text">{description}</p>
  <div class="button-wrapper">
    <Button href={buttonLink} />
  </div>
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

.button-wrapper {
  grid-area: button;
}

/*  DESKTOP LAYOUT */
@media (min-width: 768px) {
  section {
    grid-template-columns: 1fr 1.1fr;
    align-items: center;
    grid-template-areas:
      "title image"
      "text image"
      "button image";
  }

  h2 {
    text-align: left;
  }

  img {
    border-radius: var(--spacing-sm);
    aspect-ratio: 4 / 3;
  }

  .button-wrapper {
    justify-self: end;
  }
}
</style>