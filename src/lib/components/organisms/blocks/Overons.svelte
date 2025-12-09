<script>
	import Button from "$lib/components/atoms/Button/Button.svelte";

  export let title;
  export let description;
  export let image;
  export let buttonLink;
</script>


<section class="container">
  <h2 class="title">{title}</h2>

  <section class="over-ons-container">
    <img src={image} alt="Bord met de tekst Welkom bij de Bajestuin" />
    <p class="over-ons-text text">{description}</p>

    <div class="button-wrapper">
      <Button href={buttonLink} />
    </div>
  </section>
</section>

<style>
/* MOBILE LAYOUT */
.over-ons-container {
  display: grid;
  column-gap: var(--spacing-lg);
  padding-inline: var(--spacing-sm);
  margin-block-start: var(--spacing-md);
  text-align: left;
  grid-template-areas:
    "image"
    "text"
    "button";
}

h2 {
  text-align: center;
}

img {
  grid-area: image;
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: var(--spacing-md);
}

.text {
  grid-area: text;
  margin-bottom: var(--spacing-lg);
}

.button-wrapper {
  grid-area: button;
}

/*  DESKTOP LAYOUT */
@media (min-width: 768px) {
  .over-ons-container {
    grid-template-columns: 1fr 1.1fr;
    align-items: center;
    grid-template-areas:
      "text image"
      "text image"
      "button image";
  }

  h2 {
    text-align: left;
  }

  img {
    aspect-ratio: 4 / 3;
  }

  .button-wrapper {
    justify-self: end;
  }
}
</style>