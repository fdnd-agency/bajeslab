<script>
    export let title = "Samen bouwen aan een gezonde wijk";
</script>

<section>
    <picture class="hero-container">
        <source 
            media="(min-width: 1200px)" 
            srcset="/images/hero-desktop.avif 1x, /images/hero-desktop.webp 1x" 
            type="image/avif">
        <source 
            media="(min-width: 1200px)" 
            srcset="/images/hero-desktop.jpg">

        <source 
            media="(min-width: 750px)" 
            srcset="/images/hero-tablet.avif 1x, /images/hero-tablet.webp 1x" 
            type="image/avif">
        <source 
            media="(min-width: 750px)" 
            srcset="/images/hero-tablet.jpg">

        <img 
            src="/images/hero-mobile.jpg"
            srcset="/images/hero-mobile.avif 1x, /images/hero-mobile.webp 1x"
            fetchpriority="high"
            alt=""
            class="hero-img"
        />
    </picture>
    
    <h1 class="hero">{title}</h1>
</section>

<style>
section {
    position: relative;
    min-height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
}

.hero-container {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}

section::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 1;
}

.hero {
    z-index: 2;
    text-transform: uppercase;
    color: var(--color-neutral1-l3);
}

@media (min-width: 750px) {
    .hero-img {
        object-position: center;
    }
}

@media (min-width: 1200px) {
    section {
        min-height: 100vh;
    }
}
</style>