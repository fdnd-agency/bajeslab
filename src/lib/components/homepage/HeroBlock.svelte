<script>
    export let title = " Samen bouwen aan een gezonde wijk";
</script>

<section>
    <h1 class="hero">
        {title}
    </h1>
</section>

<style>
    section {
        /* fallback voor alle browsers die image-set niet ondersteunen */
        background-image: url("/images/hero-mobile.jpg");

        background-image: image-set(
        url("/images/hero-mobile.webp") type("image/webp"),
        url("/images/hero-mobile.avif") type("image/avif")
        );
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        min-height: 75vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    section::before {
        content: "";
        position: absolute;
        inset: 0; 
        background: rgba(0, 0, 0, 0.45);
        z-index: 0; 
        height: 75vh;
    }

    h1{
        z-index: 1;
        text-transform: uppercase;
    }

    /* Tablet */
    @media (min-width: 750px) {
        section {
            background-image: url("../images/hero-tablet.jpg"); /* fallback */
            background-image: image-set(
            url("../images/hero-tablet.webp") type("image/webp"),
            url("../images/hero-tablet.avif") type("image/avif")
            );
            background-position: center;
        }
    }

    /* Desktop */
    @media (min-width: 1200px) {
        section {
            background-image: url("../images/hero-desktop.jpg"); /* fallback */
            background-image: image-set(
            url("../images/hero-desktop.webp") type("image/webp"),
            url("../images/hero-desktop.avif") type("image/avif")
            );
            min-height: 100vh;
            background-position: center;
        }
        section::before{
            min-height: 100vh;
        }
    }
</style>