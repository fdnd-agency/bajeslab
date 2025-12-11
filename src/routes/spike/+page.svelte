<script></script>

<div class="page page-1">
    <h1 class="h1-1">Scroll naar beneden</h1>
    <img class="img-1" src="/images/mystic/mg-ade-tree.0x640.webp" alt="boom">
    <img class="img-2" src="/images/mystic/wgf-sidetree3-left.0x640.webp" alt="boom">
    <img class="img-dot1" src="/images/mystic/mg-story-background2.1920x0.webp" alt="dot">
    <img class="img-dot2" src="/images/mystic/mg-story-background2.1920x0.webp" alt="dot">
</div>

<section class="horizontal">
    <div class="sticky">
      <div class="split-image"></div> 
      <div class="scroll-container">
        <div class="page page-2">
          <h1>Horizontal 1</h1>
          <img class="img-rozeboom2" src="/images/mystic/wgf-sidetree3-left.0x640.webp" alt="boom">
          <img class="img-3" src="/images/mystic/mg-tree-right1.0x640.webp" alt="boom">
        </div>
        <div class="page page-3">
          <h1>Horizontal 2</h1>
          <img class="img-rodeboom" src="/images/mystic/mg-ade-tree.0x640.webp" alt="boom">
          <img class="img-rozeboom" src="/images/mystic/wgf-sidetree3-left.0x640.webp" alt="boom">
          <img class="img-4" src="/images/mystic/mystic-garden-festival-website-video-foto.1920x0x0x100.webp" alt="foto van festival">
        </div>
        <div class="page page-4">
          <h1>Horizontal 3</h1>
          <img class="img-rodeboom2" src="/images/mystic/mg-ade-tree.0x640.webp" alt="boom">
          <img class="img-5" src="/images/mystic/blurry-view-gaze-motion-forward-600nw-2492883561.jpg.webp" alt="foto van brug">
          <img class="img-6" src="/images/mystic/mg-header-logo2.1920x0x0x100.webp" alt="logo">
        </div>
      </div>
    </div>
</section>  

<div class="page page-5">
    <img class="img-7" src="/images/mystic/mg-tree-right1.0x640.webp" alt="boom">
    <img class="img-8" src="/images/mystic/mg-divider-footer-10-2bg.1920x0.webp" alt="poort">
</div>

<style>
/* --- 1. GLOBALE STIJLEN --- */
h1 {
    font-family: Mystic, sans-serif;
    font-size: 3rem;
}

.h1-1 {
    font-size: 4rem;
}

/* Pagina container */
.page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F4EBE1;
    position: relative;
}

/* --- 2. PAGINA 1 STIJLEN --- */
.page-1 {
    view-timeline-name: --p1;
    view-timeline-axis: block;
    overflow: clip;
}

.img-1 {
    position: absolute;
    right: 0;
    bottom: 5vh;
    height: 50vh;
    transform-origin: 100% 0%;
    animation: swayRight linear forwards;
    animation-timeline: scroll();
}

.img-2 {
    position: absolute;
    left: 0;
    top: 10vh;
    height: 60vh;
    transform-origin: 0% 0%;
    animation: swayLeft linear forwards;
    animation-timeline: scroll();
}

.img-dot1 {
    position: absolute;
    left: 25%;
    bottom: 10%;
    width: 20%;
    animation: rotateDots linear;
    animation-timeline: scroll();
}

.img-dot2 {
    position: absolute;
    right: 25%;
    top: 10%;
    width: 20%;
    animation: rotateDots linear;
    animation-timeline: scroll();
}

/* --- 3. HORIZONTALE SECTIE STIJLEN (PAGES 2, 3, 4) --- */
.horizontal {
    height: 300vh;
    view-timeline-name: --ht;
}

.sticky {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
}

.scroll-container {
    display: flex;
    height: 100vh;
    width: 300vw;
    animation: scroll linear forwards;
    animation-timeline: --ht;
    animation-range: contain;
}

.scroll-container .page {
    width: 100vw;
    flex-shrink: 0;
}

/* Horizontale decoraties */
.img-rodeboom {
    position: absolute;
    left: 45%;
    top: 0;
    height: 50vh;
    transform: translateY(-10%) rotate(270deg);
}

.img-rodeboom2{
    position: absolute;
    right: 45%;
    top: 0;
    height: 50vh;
    transform: translateY(-20%) rotate(190deg);
}

.img-rozeboom {
    position: absolute;
    left: 35%;
    bottom: 0;
    height: 60vh;
    transform: translateY(40%) rotate(-15deg);
}

.img-rozeboom2 {
    position: absolute;
    right: 35%;
    bottom: 0;
    height: 60vh;
    transform: translateY(30%) rotate(300deg);
}

/* Horizontale geanimeerde elementen */
.img-3 {
    position: absolute;
    left: 0;
    top: 0;
    transform: scaleX(-1);
    animation: moveSideways linear forwards;
    animation-timeline: --ht;
    animation-range: contain;
}

.img-4 {
    position: absolute;
    width: 50%;
    height: 50%;
    left: -25%;
    border-radius: 0.1rem;
    object-fit: cover;
    animation: mysticFloat linear forwards;
    animation-timeline: --ht;
    animation-range: contain;
}

.img-5 {
    position: absolute;
    width: 50%;
    height: 50%;
    left: -25%;
    border-radius: 0.1rem;
    object-fit: cover;
    animation: mysticPulse linear forwards;
    animation-timeline: --ht;
    animation-range: contain;
}

.img-6 {
    position: absolute;
    width: 20%;
    top: 0;
    right: 0;
    transform: scaleX(-1);
    animation: logo-pulse 3s ease-in-out infinite alternate;
}

/* --- 4. PAGINA 5 STIJLEN --- */
.page-5 {
    view-timeline-name: --page5;
    view-timeline-axis: block;
}

/* img-7 Boom: Rotatie Langzaam, Opacity Snel */
.img-7{
    position: absolute;
    right: 0;
    top: -30%; 
    width: 30%;
    animation: 
        swayDowns linear forwards,
        fadeBoomQuick linear forwards;
    animation-timeline: --page5;
    transform-origin: 100% 0;
    opacity: 0%; 
    animation-range: 
        entry 0% cover 100%, /* Rotatie range (langzaam) */
        entry 0% cover 10%;  /* Opacity range (snel) */
}


.img-8 {
    position: absolute;
    width: 100%;
    height: 500px;
    top: 0;
    object-fit: cover;
    animation: moveDivider linear forwards;
    animation-timeline: --page5;
}

/* --- 5. KEYFRAMES --- */

    @keyframes swayRight {
        from { transform: rotate(0deg); }
        to { transform: rotate(-180deg); }
    }

    @keyframes swayLeft {
        from { transform: rotate(0deg); }
        to { transform: rotate(180deg); }
    }

    @keyframes rotateDots {
        from { transform: rotate(0deg); }
        to { transform: rotate(720deg); }
    }

    @keyframes scroll {
        to { transform: translateX(calc(-100% + 100vw)); }
    }

    @keyframes moveSideways {
        from { transform: scaleX(-1) rotate(0deg); }
        to { transform: scaleX(-1) rotate(-180deg); }
    }

    @keyframes moveDivider {
        from { transform: translateY(0); }
        to { transform:translateY(calc(120vh - 500px))}
    }

    /* Keyframes Page 5 */
    @keyframes swayDowns {
        from { 
            transform: rotate(0deg); 
        }
        to { 
            transform: rotate(-90deg); 
        } 
    }

    @keyframes fadeBoomQuick {
        from { 
            opacity: 0; 
        }
        to { 
            opacity: 100; 
        } 
    }

    /* Afbeelding Keyframes */
    @keyframes mysticFloat {
        0% { 
            transform: translateY(0) rotate(0deg) scale(1);
            filter: drop-shadow(0 0 25px rgba(23, 40, 11));
        }
        50% { 
            transform: translateY(-20px) rotate(5deg) scale(1.04);
            filter: drop-shadow(0 0 40px rgba(23, 40, 11));
        }
        100% { 
            transform: translateY(-30px) rotate(-3deg) scale(1.06);
            filter: drop-shadow(0 0 35px rgba(23, 40, 11));
        }
    }

    @keyframes mysticPulse {
        0% { 
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 25px rgb(23, 40, 11));
        }
        33% { 
            transform: scale(1.05) rotate(3deg);
            filter: drop-shadow(0 0 45px rgba(23, 40, 11));
        }
        66% { 
            transform: scale(0.97) rotate(-3deg);
            filter: drop-shadow(0 0 30px rgba(23, 40, 11));
        }
        100% { 
            transform: scale(1.03) rotate(0deg);
            filter: drop-shadow(0 0 35px rgba(23, 40, 11));
        }
    }

    @keyframes logo-pulse {
        0% {
            filter: drop-shadow(0 0 20px rgba(purple)); 
            transform: scaleX(-1) scale(1); 
        }
        50% {
            filter: drop-shadow(0 0 50px rgba(purple)); 
            transform: scaleX(-1) scale(1.05); 
        }
        100% {
            filter: drop-shadow(0 0 30px rgba(purple)); 
            transform: scaleX(-1) scale(1); 
        }
    }
</style>